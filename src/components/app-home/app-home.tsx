import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {
  render() {
    return (
      <Host>
        <section
          class='vh100'
          style={{ 'background-color': 'var(--mm-primary)' }}
        >
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <mm-badge value='Hi' />
          <mm-badge value='Hi' />
          <mm-badge value='Hi' />
          <mm-badge value='Hi' />
        </section>
        <section
          class='vh50'
          style={{ 'background-color': 'var(--mm-secondary)' }}
        >
          <mm-badge value='Hi' />
        </section>
      </Host>
    );
  }
}
