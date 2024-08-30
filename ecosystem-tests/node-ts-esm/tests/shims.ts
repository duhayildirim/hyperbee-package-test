// shouldn't need extension, but Jest's ESM module resolution is broken
import 'hyperbee-package-test/shims/node.mjs';
import * as shims from 'hyperbee-package-test/_shims/index';

test('hyperbee-package-test/shims/node', () => {
  expect(shims.kind).toEqual('node');
});
