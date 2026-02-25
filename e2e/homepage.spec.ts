import { test, expect } from '@playwright/test';

test('homepage has expected title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle('Michael Weitzman');
});

test('user can open and close position details drawer', async ({ page }) => {
    await page.goto('/');

    // Find all position info buttons
    const infoButtons = await page.locator('[data-testid^="position-info-"]');
    const count = await infoButtons.count();
    expect(count).toBeGreaterThan(0);

    // Click the first position info button
    await infoButtons.first().click();

    // Drawer should appear
    const drawer = page.locator('[data-testid="drawer"]');
    await expect(drawer).toBeVisible();

    // Optionally, close the drawer (if close button is present)
    const closeButton = drawer.locator('button');
    await closeButton.click();
    await expect(drawer).not.toBeVisible();
});
