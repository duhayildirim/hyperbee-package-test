/**
 * @jest-environment jsdom
 */

export {};

test('hyperbee-package-test/shims/web throws if globals are missing', async () => {
  await expect(() => import('hyperbee-package-test/shims/web')).rejects.toThrow(
    `this environment is missing the following Web Fetch API type: fetch is not defined. You may need to use polyfills`,
  );
});
