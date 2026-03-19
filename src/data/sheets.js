/**
 * Google Sheets API utility for MJ-Garden
 * Reads/writes garden data directly to the master spreadsheet.
 *
 * Sheet ID: 1d73x6CS06DdGFJzoM863S0mcY8QN3rDZ
 * Auth: OAuth2 installed-app flow (credentials.json + token.json)
 */

import { google } from 'googleapis';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = resolve(__dirname, '../..');

const SPREADSHEET_ID = '1d73x6CS06DdGFJzoM863S0mcY8QN3rDZ';
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const TOKEN_PATH = resolve(PROJECT_ROOT, 'token.json');
const CREDENTIALS_PATH = resolve(PROJECT_ROOT, 'credentials.json');

/**
 * Load saved token or return null.
 */
function loadToken() {
  if (existsSync(TOKEN_PATH)) {
    return JSON.parse(readFileSync(TOKEN_PATH, 'utf-8'));
  }
  return null;
}

/**
 * Save token to disk for future runs.
 */
function saveToken(token) {
  writeFileSync(TOKEN_PATH, JSON.stringify(token, null, 2));
}

/**
 * Build an OAuth2 client from credentials.json.
 * If a saved token exists, sets it automatically.
 * Returns { client, needsAuth } — if needsAuth is true,
 * call authorizeInteractive() before using the client.
 */
export function getOAuth2Client() {
  const creds = JSON.parse(readFileSync(CREDENTIALS_PATH, 'utf-8'));
  const { client_id, client_secret, redirect_uris } = creds.installed;
  const client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  const token = loadToken();
  if (token) {
    client.setCredentials(token);
    // Auto-refresh: save new tokens when they arrive
    client.on('tokens', (newTokens) => {
      const merged = { ...token, ...newTokens };
      saveToken(merged);
    });
    return { client, needsAuth: false };
  }
  return { client, needsAuth: true };
}

/**
 * Generate the authorization URL the user must visit.
 */
export function getAuthUrl(client) {
  return client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
    prompt: 'consent',
  });
}

/**
 * Exchange an authorization code for tokens and persist them.
 */
export async function exchangeCode(client, code) {
  const { tokens } = await client.getToken(code);
  client.setCredentials(tokens);
  saveToken(tokens);
  return tokens;
}

/**
 * Return an authorized Sheets client (assumes token.json exists).
 */
export async function getSheetsClient() {
  const { client, needsAuth } = getOAuth2Client();
  if (needsAuth) {
    throw new Error(
      'Not authenticated. Run `node scripts/auth.js` first to complete the OAuth2 flow.'
    );
  }
  return google.sheets({ version: 'v4', auth: client });
}

/**
 * List every tab (sheet) name in the spreadsheet.
 */
export async function listTabs() {
  const sheets = await getSheetsClient();
  const res = await sheets.spreadsheets.get({ spreadsheetId: SPREADSHEET_ID });
  return res.data.sheets.map((s) => s.properties.title);
}

/**
 * Read all rows from a single tab. Returns an array of arrays.
 */
export async function readTab(tabName) {
  const sheets = await getSheetsClient();
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: tabName,
  });
  return res.data.values || [];
}

/**
 * Read every tab and return { tabName: rows[][] }
 */
export async function readAllTabs() {
  const tabs = await listTabs();
  const result = {};
  for (const tab of tabs) {
    result[tab] = await readTab(tab);
  }
  return result;
}

/**
 * Write rows to a tab (replaces existing content).
 */
export async function writeTab(tabName, rows) {
  const sheets = await getSheetsClient();
  await sheets.spreadsheets.values.update({
    spreadsheetId: SPREADSHEET_ID,
    range: tabName,
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: rows },
  });
}

/**
 * Append rows to the end of a tab.
 */
export async function appendRows(tabName, rows) {
  const sheets = await getSheetsClient();
  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: tabName,
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: rows },
  });
}
