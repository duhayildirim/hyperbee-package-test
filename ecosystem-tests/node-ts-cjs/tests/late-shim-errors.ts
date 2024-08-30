export {};

test('throws if shims are imported after openai', async () => {
  await import('hyperbee-package-test');
  await expect(() => import('hyperbee-package-test/shims/web')).rejects.toThrow(
    `you must \`import 'hyperbee-package-test/shims/web'\` before importing anything else from openai`,
  );
});
