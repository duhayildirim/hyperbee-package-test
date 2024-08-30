// shouldn't need extension, but Jest's ESM module resolution is broken
import 'hyperbee-package-test/shims/web.mjs';
import * as shims from 'hyperbee-package-test/_shims/index';

function typeTests(x: shims.Request) {
  const url: string = x.url;
}

test('hyperbee-package-test/shims/node', () => {
  expect(shims.kind).toEqual('web');
  expect(shims.File).toEqual(File);
});
