import { test, expect } from '@playwright/test';

test('user can open playlist details drawer', async ({ page }) => {
  await page.goto('/playlists');

  // Find the first playlist card
  const firstCard = page.locator('[data-testid^="playlist-card-"]').first();
  await expect(firstCard).toBeVisible();

  // Click the card
  await firstCard.click();

  // Verify URL updates with playlist ID
  const href = await firstCard.getAttribute('data-testid');
  const playlistId = href?.replace('playlist-card-', '');
  await expect(page).toHaveURL(new RegExp(`/playlists/${playlistId}`));

  // Verify drawer is visible
  const drawer = page.locator('[data-testid="drawer"]');
  await expect(drawer).toBeVisible();

  // Verify playlist details are loaded
  const meta = drawer.locator('[data-testid="playlist-meta"]');
  const tracks = drawer.locator('[data-testid="playlist-tracks"]');
  await expect(meta).toBeVisible();
  await expect(tracks).toBeVisible();
});
