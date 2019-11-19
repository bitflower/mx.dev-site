import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {
  render() {
    return (
      <Host>
        <section style={{ 'background-color': 'var(--mm-primary)' }}>
          <mm-badge value='Hi' />
        </section>
      </Host>
    );
  }
}
