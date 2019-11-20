import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {
  render() {
    return (
      <Host>
        <ion-content>
          <mm-header />
          <section class='vh100 bg-primary-base hero'>
            <div class='content'>
              <div class='manifest'>
                <h1>
                  „Focus on the <span class='value'>value</span> and everything
                  else will fall into place.
                </h1>
              </div>
            </div>
          </section>
          <section class='vh50 bg-secondary-base'>
            <mm-badge value='Hi' />
          </section>
        </ion-content>
      </Host>
    );
  }
}
