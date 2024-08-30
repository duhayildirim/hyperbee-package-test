import 'hyperbee-package-test/shims/node';
import * as shims from 'hyperbee-package-test/_shims/index';
import * as fd from 'formdata-node';

function typeTests(x: shims.Request) {
  const url: string = x.url;
}

test('hyperbee-package-test/shims/node', () => {
  expect(shims.kind).toEqual('node');
  expect(shims.File).toBe(fd.File);
});
