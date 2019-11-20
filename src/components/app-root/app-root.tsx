import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss'
})
export class AppRoot {
  render() {
    return (
      <ion-app>
        <ion-header>
          <mm-header />
        </ion-header>
        <ion-router useHash={false}>
          <ion-route url='/' component='app-home' />
          <ion-route url='/design-system' component='app-profile' />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
