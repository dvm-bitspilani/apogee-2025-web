import test from 'node:test';
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

async function component(entryPoint) {
  const result = await build({ entryPoints: [entryPoint], bundle: true, write: false, format: 'esm', platform: 'node', jsx: 'automatic', plugins: [{ name: 'node-imports', setup(builder) { builder.onResolve({ filter: /^(react(?:\/.*)?|react-router|react-redux)$/ }, args => ({ path: import.meta.resolve(args.path), external: true })); } }, { name: 'assets', setup(builder) {
    builder.onLoad({ filter: /\.(scss|webp)$/ }, () => ({ contents: 'export default new Proxy({}, { get: (_, name) => String(name) });', loader: 'js' }));
  }}] });
  return import('data:text/javascript;base64,' + Buffer.from(result.outputFiles[0].text).toString('base64'));
}

test('closed registration contains one labelled native dialog and no data collection', async () => {
  const { RegistrationClosedDialog } = await component('src/ui/RegistrationClosed.jsx');
  const html = renderToStaticMarkup(React.createElement(RegistrationClosedDialog, { onClose() {} }));
  assert.match(html, /<dialog[^>]*aria-labelledby="registration-closed-title"/);
  assert.match(html, /id="registration-closed-title">Registration is closed for this edition/);
  assert.match(html, /<button[^>]*type="button"[^>]*>Close/);
  assert.doesNotMatch(html, /<(input|form|select|textarea)\b/);
});

test('Quantaculus deep link retains its artwork page without a simulated quiz or results', async () => {
  const { default: Quantaculus } = await component('routes/Quantaculus.jsx');
  const html = renderToStaticMarkup(React.createElement(MemoryRouter, null, React.createElement(Quantaculus)));
  assert.match(html, /QUANTACULUS/);
  assert.match(html, /This edition has ended/);
  assert.match(html, /href="\/"/);
  assert.doesNotMatch(html, /<(input|form|select|textarea)\b|demo|score|sample/i);
});

test('every original decorative font keeps its verified original bytes', async () => {
  const { original_fonts } = JSON.parse(await readFile('scripts/font-verification.json', 'utf8'));
  for (const font of original_fonts) {
    assert.equal(createHash('sha256').update(await readFile(font.path)).digest('hex'), font.sha256, font.path);
  }
});
