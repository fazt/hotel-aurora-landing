const { test, expect } = require('@playwright/test');

test.describe('Login Hotel Aurora', () => {
  test('permite iniciar sesión con credenciales demo', async ({ page }) => {
    await page.goto('/login.html');

    await expect(page.getByRole('heading', { name: 'Iniciar sesión' })).toBeVisible();
    await page.getByLabel('Email').fill('demo@hotelaurora.com');
    await page.getByLabel('Contraseña').fill('hotel123');
    await page.getByRole('button', { name: 'Entrar' }).click();

    await expect(page.locator('#login-message')).toHaveText(/Login correcto/);
    await expect(page.locator('#login-form')).toHaveAttribute('data-state', 'success');

    const session = await page.evaluate(() => JSON.parse(localStorage.getItem('hotelAuroraSession')));
    expect(session.email).toBe('demo@hotelaurora.com');
    expect(session.name).toBe('Huésped Demo');
  });

  test('muestra error con credenciales inválidas', async ({ page }) => {
    await page.goto('/login.html');

    await page.getByLabel('Email').fill('demo@hotelaurora.com');
    await page.getByLabel('Contraseña').fill('incorrecta');
    await page.getByRole('button', { name: 'Entrar' }).click();

    await expect(page.locator('#login-message')).toHaveText('Email o contraseña incorrectos.');
    await expect(page.locator('#login-form')).toHaveAttribute('data-state', 'error');
    await expect(page.evaluate(() => localStorage.getItem('hotelAuroraSession'))).resolves.toBeNull();
  });
});
