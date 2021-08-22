import { newSpecPage } from '@stencil/core/testing';
import { TesteButton } from '../teste-button';

describe('teste-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TesteButton],
      html: `<teste-button></teste-button>`,
    });
    expect(page.root).toEqualHtml(`
      <teste-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </teste-button>
    `);
  });
});
