import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css'
})
export class AppProfile {
  render() {
    return (
      <Host>
        <ion-content scrollY={true}>
          <section
            class='vh100'
            style={{ 'background-color': 'var(--mm-color-primary)' }}
          >
            <div class='content'>
              <h1>Heading 1</h1>
              <h2>Heading 2</h2>
              <h3>Heading 3</h3>
              <mm-badge value='60+ apps' />
              <mm-badge value='200+ components' />
              <mm-badge value='TDD' />
              <mm-badge value='Hi' />
            </div>
          </section>
          <section
            class='vh50'
            style={{ 'background-color': 'var(--mm-color-secondary)' }}
          >
            <mm-badge value='Hi' />
          </section>
        </ion-content>
      </Host>
    );
  }
}
