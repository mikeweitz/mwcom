import { test, expect } from '@playwright/test';

test('user can navigate to playlists page', async ({ page }) => {
    await page.goto('/');
    // Click the playlists link in the header
    // await page.getByRole('link', { name: /playlists/i }).click();
    const link = page
        .locator('[data-testid="global-header"]')
        .getByRole('link', { name: /playlists/i })
        .first();
    await expect(link).toBeVisible();
    await link.click();

    // Assert the URL is correct
    await expect(page).toHaveURL(/\/playlists/);
    // Optionally, check for content unique to the playlists page
    const playlistPage = page.locator('[data-testid="playlists"]');
    await expect(playlistPage).toBeVisible();
});

test('user can navigate to blog page', async ({ page }) => {
    await page.goto('/');
    // Click the blog link in the header
    // await page.getByRole('link', { name: /blog/i }).click();
    const link = page
        .locator('[data-testid="global-header"]')
        .getByRole('link', { name: /blog/i })
        .first();
    await expect(link).toBeVisible();
    await link.click();

    // Assert the URL is correct
    await expect(page).toHaveURL(/\/blog/);
    // Optionally, check for content unique to the blog page

    const blogPage = page.locator('[data-testid="blog-index"]');
    await expect(blogPage).toBeVisible();
});
