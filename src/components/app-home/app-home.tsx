import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {
  render() {
    return (
      <Host>
        {/* <ion-content> */}
        <section class='vh100 bg-primary-base hero'>
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
        <section class='vh50 bg-secondary-base'>
          <mm-badge value='Hi' />
        </section>
        {/* </ion-content> */}
      </Host>
    );
  }
}
