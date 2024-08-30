export {};

test('throws if shims are imported after hyperbee-package-test', async () => {
  await import('hyperbee-package-test');
  await expect(() => import('hyperbee-package-test/shims/web')).rejects.toThrow(
    `you must \`import 'hyperbee-package-test/shims/web'\` before importing anything else from hyperbee-package-test`,
  );
});
