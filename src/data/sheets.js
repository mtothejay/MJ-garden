/**
 * Google Sheets API utility for MJ-Garden
 * Reads/writes garden data directly to the master spreadsheet.
 *
 * Sheet ID: 1d73x6CS06DdGFJzoM863S0mcY8QN3rDZ
 */

import { google } from 'googleapis';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const SPREADSHEET_ID = '1d73x6CS06DdGFJzoM863S0mcY8QN3rDZ';

/**
 * Authenticate using a service-account JSON key file.
 * Looks for credentials.json in the project root by default.
 */
function getAuth(credentialsPath) {
  const keyPath = credentialsPath || resolve(__dirname, '../../credentials.json');
  const creds = JSON.parse(readFileSync(keyPath, 'utf-8'));

  return new google.auth.GoogleAuth({
    credentials: creds,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
}

/**
 * Return an authorized Sheets client.
 */
export async function getSheetsClient(credentialsPath) {
  const auth = getAuth(credentialsPath);
  return google.sheets({ version: 'v4', auth });
}

/**
 * List every tab (sheet) name in the spreadsheet.
 */
export async function listTabs(credentialsPath) {
  const sheets = await getSheetsClient(credentialsPath);
  const res = await sheets.spreadsheets.get({ spreadsheetId: SPREADSHEET_ID });
  return res.data.sheets.map((s) => s.properties.title);
}

/**
 * Read all rows from a single tab. Returns an array of arrays.
 */
export async function readTab(tabName, credentialsPath) {
  const sheets = await getSheetsClient(credentialsPath);
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: tabName,
  });
  return res.data.values || [];
}

/**
 * Read every tab and return { tabName: rows[][] }
 */
export async function readAllTabs(credentialsPath) {
  const tabs = await listTabs(credentialsPath);
  const result = {};
  for (const tab of tabs) {
    result[tab] = await readTab(tab, credentialsPath);
  }
  return result;
}

/**
 * Write rows to a tab (replaces existing content).
 */
export async function writeTab(tabName, rows, credentialsPath) {
  const sheets = await getSheetsClient(credentialsPath);
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
export async function appendRows(tabName, rows, credentialsPath) {
  const sheets = await getSheetsClient(credentialsPath);
  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: tabName,
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: rows },
  });
}
