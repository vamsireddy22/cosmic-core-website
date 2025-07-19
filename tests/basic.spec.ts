import { test, expect } from '@playwright/test';

test.describe('Cosmic Core Website', () => {
  test('server responds with HTML', async ({ page }) => {
    await page.goto('/');
    
    // Check page title exists
    const title = await page.title();
    expect(title).toBeTruthy();
    expect(title.length).toBeGreaterThan(0);
  });

  test('page has basic structure', async ({ page }) => {
    await page.goto('/');
    
    // Check that body exists and has content
    const bodyExists = await page.locator('body').count();
    expect(bodyExists).toBeGreaterThan(0);
    
    // Check that page has some HTML content
    const htmlContent = await page.content();
    expect(htmlContent.length).toBeGreaterThan(1000);
  });

  test('no critical console errors', async ({ page }) => {
    // Listen for console errors
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    
    await page.goto('/');
    await page.waitForTimeout(3000);
    
    // Filter out non-critical errors
    const criticalErrors = errors.filter(error => 
      !error.includes('favicon') && 
      !error.includes('deprecation') &&
      !error.includes('webpack') &&
      !error.includes('404')
    );
    
    expect(criticalErrors.length).toBe(0);
  });
}); 