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
          <section class='vh50 bg-light-base matt color-dark-base'>
            <div class='content text-center'>
              <h2>Hi, I'm Matt. Great to meet you.</h2>
              <p>
                Since beginning my journey as a freelance designer nearly 8
                years ago, I've done remote work for agencies, consulted for
                startups, and collaborated with talented people to create
                digital products for both business and consumer use. I'm quietly
                confident, naturally curious, and perpetually working on
                improving my chops one design problem at a time.
              </p>
              {/* <p>
                Since beginning my journey as a freelance designer nearly 8
                years ago, I've done remote work for agencies, consulted for
                startups, and collaborated with talented people to create
                digital products for both business and consumer use. I'm quietly
                confident, naturally curious, and perpetually working on
                improving my chops one design problem at a time.
              </p> */}
            </div>
          </section>
          <section class='vh50 bg-primary-base'>
            <div class='content wide overlap'>
              <div class='bg-light-base box overlap-container'>
                <h2>More ...</h2>
                <p>
                  Since beginning my journey as a freelance designer nearly 8
                  years ago, I've done remote work for agencies, consulted for
                  startups, and collaborated with talented people to create
                  digital products for both business and consumer use. I'm
                  quietly confident, naturally curious, and perpetually working
                  on improving my chops one design problem at a time.
                </p>
              </div>
            </div>
          </section>
        </ion-content>
      </Host>
    );
  }
}
