/**
 * @jest-environment jsdom
 */

export {};

it(`throws when fetch API types are missing`, async () => {
  await expect(() => import('hyperbee-package-test')).rejects.toThrow(
    'this environment is missing the following Web Fetch API type',
  );
});
