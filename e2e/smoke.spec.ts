import { test, expect } from '@playwright/test'

test.describe('critical journeys', () => {
  test('home page renders and primary CTA works', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('navigation', { name: 'Primary' })).toBeVisible()
    await page.getByRole('link', { name: 'Start Your Project' }).click()
    await expect(page).toHaveURL(/\/contact/)
  })

  test('contact form validates and submits successfully', async ({ page }) => {
    await page.goto('/contact')
    await page.getByLabel('Full Name *').fill('Test User')
    await page.getByLabel('Email Address *').fill('test@example.com')
    await page
      .getByLabel('Tell us about your project *')
      .fill('Looking for a Next.js marketing site with a production contact flow.')
    await page.getByRole('button', { name: 'Send Message' }).click()
    await expect(page.getByRole('status')).toContainText(/message was sent/i)
  })

  test('footer legal links resolve', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'Privacy Policy' }).click()
    await expect(page).toHaveURL(/\/privacy/)
    await page.goto('/')
    await page.getByRole('link', { name: 'Terms of Service' }).click()
    await expect(page).toHaveURL(/\/terms/)
  })

  test('services deep links land on section anchors', async ({ page }) => {
    await page.goto('/services#cloud')
    await expect(page.locator('#cloud')).toBeVisible()
  })

  test('primary nav destinations resolve without 404', async ({ page }) => {
    const paths = ['/', '/about', '/services', '/portfolio', '/blog', '/contact', '/privacy', '/terms']
    for (const path of paths) {
      const response = await page.goto(path)
      expect(response?.ok()).toBeTruthy()
      await expect(page.getByRole('navigation', { name: 'Primary' })).toBeVisible()
    }
  })
})
