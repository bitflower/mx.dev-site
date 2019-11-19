import { newE2EPage } from '@stencil/core/testing';

describe('mm-badge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mm-badge></mm-badge>');

    const element = await page.find('mm-badge');
    expect(element).toHaveClass('hydrated');
  });
});
