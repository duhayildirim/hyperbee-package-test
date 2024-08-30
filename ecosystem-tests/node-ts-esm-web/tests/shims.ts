// shouldn't need extension, but Jest's ESM module resolution is broken
import 'openai/shims/web.mjs';
import * as shims from 'openai/_shims/index';

function typeTests(x: shims.Request) {
  const url: string = x.url;
}

test('openai/shims/node', () => {
  expect(shims.kind).toEqual('web');
  expect(shims.File).toEqual(File);
});
