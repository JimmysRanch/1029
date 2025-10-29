import { createServer } from 'http';
import { promises as fs } from 'fs';
import path from 'path';

function log(message) {
  console.log(`[next-placeholder] ${message}`);
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function collectRoutes(dir, base = '') {
  const entries = await fs.readdir(dir, { withFileTypes: true }).catch(() => []);
  const routes = [];
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const childBase = path.join(base, entry.name);
      routes.push(...await collectRoutes(path.join(dir, entry.name), childBase));
    } else if (entry.name === 'page.tsx' || entry.name === 'page.ts') {
      routes.push('/' + base.replace(/\\/g, '/'));
    }
  }
  return routes;
}

async function build() {
  const outDir = path.resolve('.next');
  await fs.rm(outDir, { recursive: true, force: true });
  await ensureDir(outDir);
  const appDir = path.resolve('src/app');
  const routes = await collectRoutes(appDir);
  const summary = {
    generatedAt: new Date().toISOString(),
    routes
  };
  await fs.writeFile(path.join(outDir, 'BUILD_SUMMARY.json'), JSON.stringify(summary, null, 2), 'utf8');
  log(`Build complete with ${routes.length} routes.`);
}

function serve(port, responder) {
  const server = createServer(responder);
  server.listen(port, () => {
    log(`Server listening on http://localhost:${port}`);
  });
}

async function dev() {
  const port = Number(process.env.PORT || 3000);
  serve(port, (_req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Development server placeholder. Build to generate summary.');
  });
}

async function start() {
  const port = Number(process.env.PORT || 3000);
  const summaryPath = path.resolve('.next/BUILD_SUMMARY.json');
  let message = 'Run `next build` first to generate route summary.';
  try {
    const contents = await fs.readFile(summaryPath, 'utf8');
    message = `Available routes: ${contents}`;
  } catch (error) {
    message = `${message}\n${String(error)}`;
  }
  const finalMessage = message;
  serve(port, (_req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(finalMessage);
  });
}

export async function run(args) {
  const [command = 'dev'] = args;
  if (command === 'build') {
    await build();
  } else if (command === 'dev') {
    await dev();
  } else if (command === 'start') {
    await start();
  } else {
    console.error(`Unknown command: ${command}`);
    process.exit(1);
  }
}

export default {
  run
};
