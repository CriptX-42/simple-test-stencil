import { newE2EPage } from '@stencil/core/testing';

describe('teste-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<teste-button></teste-button>');

    const element = await page.find('teste-button');
    expect(element).toHaveClass('hydrated');
  });
});
