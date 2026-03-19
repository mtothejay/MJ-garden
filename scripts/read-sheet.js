#!/usr/bin/env node
/**
 * Read all tabs from the garden master spreadsheet.
 * Usage: node scripts/read-sheet.js
 */

import { readAllTabs } from '../src/data/sheets.js';

async function main() {
  console.log('Reading garden master spreadsheet...\n');
  const allData = await readAllTabs();

  for (const [tab, rows] of Object.entries(allData)) {
    console.log(`\n=== ${tab} (${rows.length} rows) ===`);
    for (const row of rows.slice(0, 15)) {
      console.log(row.join(' | '));
    }
    if (rows.length > 15) {
      console.log(`  ... and ${rows.length - 15} more rows`);
    }
  }
}

main().catch((err) => {
  console.error('Error reading spreadsheet:', err.message);
  process.exit(1);
});
