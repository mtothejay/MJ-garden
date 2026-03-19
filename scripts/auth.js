#!/usr/bin/env node
/**
 * One-time OAuth2 authorization flow.
 *
 * Usage:
 *   node scripts/auth.js
 *
 * 1. Prints a URL — open it in your browser and grant access.
 * 2. Google redirects to localhost with a code in the URL.
 *    Copy the `code` query parameter and paste it here.
 * 3. Saves token.json for future use.
 */

import { createInterface } from 'readline';
import { getOAuth2Client, getAuthUrl, exchangeCode } from '../src/data/sheets.js';

const { client, needsAuth } = getOAuth2Client();

if (!needsAuth) {
  console.log('Already authenticated! token.json exists.');
  console.log('Delete token.json and re-run this script to re-authorize.');
  process.exit(0);
}

const url = getAuthUrl(client);

console.log('Authorize this app by visiting this URL:\n');
console.log(url);
console.log(
  '\nAfter granting access, you will be redirected to localhost (it may show an error page — that\'s OK).'
);
console.log('Copy the "code" parameter from the redirect URL and paste it below.\n');

const rl = createInterface({ input: process.stdin, output: process.stdout });

rl.question('Enter the authorization code: ', async (code) => {
  rl.close();
  try {
    await exchangeCode(client, code.trim());
    console.log('\nAuthentication successful! Token saved to token.json.');
    console.log('You can now run: node scripts/read-sheet.js');
  } catch (err) {
    console.error('Error exchanging code:', err.message);
    process.exit(1);
  }
});
