import * as shims from 'hyperbee-package-test/_shims/index';

test('hyperbee-package-test/shims/node', () => {
  expect(shims.kind).toEqual('node');
});
