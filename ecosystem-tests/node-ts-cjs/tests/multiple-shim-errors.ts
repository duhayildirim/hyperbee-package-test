export {};

test('throws if multiple shims are imported', async () => {
  await import('hyperbee-package-test/shims/node');
  await expect(() => import('hyperbee-package-test/shims/web')).rejects.toThrow(
    `can't \`import 'hyperbee-package-test/shims/web'\` after \`import 'hyperbee-package-test/shims/node'\``,
  );
});
