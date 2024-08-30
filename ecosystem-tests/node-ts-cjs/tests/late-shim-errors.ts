export {};

test('throws if shims are imported after openai', async () => {
  await import('hyperbee-package-test');
  await expect(() => import('openai/shims/web')).rejects.toThrow(
    `you must \`import 'openai/shims/web'\` before importing anything else from openai`,
  );
});
