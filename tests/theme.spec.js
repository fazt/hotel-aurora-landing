const { test, expect } = require('@playwright/test');

test.describe('Tema oscuro', () => {
  test('permite alternar a tema oscuro y persiste la preferencia', async ({ page }) => {
    await page.goto('/index.html');

    const toggle = page.getByRole('button', { name: /Tema oscuro/ });
    await expect(toggle).toBeVisible();
    await toggle.click();

    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    await expect(page.getByRole('button', { name: /Tema claro/ })).toBeVisible();
    await expect(page.evaluate(() => localStorage.getItem('hotelAuroraTheme'))).resolves.toBe('dark');

    await expect.poll(
      () => page.locator('body').evaluate((body) => getComputedStyle(body).backgroundColor),
      { message: 'el fondo debe terminar la transición al color oscuro' },
    ).toBe('rgb(13, 20, 22)');

    await page.goto('/login.html');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    await expect(page.getByRole('button', { name: /Tema claro/ })).toBeVisible();
  });

  test('permite volver a tema claro', async ({ page }) => {
    await page.goto('/login.html');
    await page.evaluate(() => localStorage.setItem('hotelAuroraTheme', 'dark'));
    await page.reload();

    await page.getByRole('button', { name: /Tema claro/ }).click();

    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
    await expect(page.getByRole('button', { name: /Tema oscuro/ })).toBeVisible();
    await expect(page.evaluate(() => localStorage.getItem('hotelAuroraTheme'))).resolves.toBe('light');
  });
});
