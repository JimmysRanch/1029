#!/usr/bin/env node
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const command = process.argv[2] || 'dev';

if (command === 'build') {
  const required = [
    'next.config.mjs',
    'src/app/layout.tsx',
    'src/app/page.tsx',
    'src/app/globals.css'
  ];

  const missing = required.filter((file) => !existsSync(resolve(process.cwd(), file)));
  if (missing.length > 0) {
    console.error('Build failed. Missing files:', missing.join(', '));
    process.exit(1);
  }
  console.log('Stub Next build succeeded.');
  process.exit(0);
}

if (command === 'dev' || command === 'start') {
  console.log(`Stub Next ${command} server is not implemented.`);
  process.exit(0);
}

console.log(`Unknown Next command: ${command}`);
process.exit(1);
