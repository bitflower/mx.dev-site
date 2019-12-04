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
          <section class='vh100 bg-light-base hero color-dark-base'>
            <img src='assets/legos.png' class='legos fly' />
            <div class='content'>
              <div class='manifest'>
                <h1>
                  „Focus on the <span class='value'>value</span> and everything
                  else will fall into place.
                </h1>
              </div>
            </div>
          </section>
          <section class='bg-primary-base matt color-light-shade'>
            <div class='content padding-side-3 text-center padding-bm-22'>
              <h2>Hi, I'm Matt. Great to meet you.</h2>
              <p>
                For the last 5 years I’ve been building enterprise application
                for large corporations. Happily switching between requirements
                engineering, UI and UX work, architecture. I like working with
                talented people because I strongly believe that great value
                comes from interdisciplinary collaboration.
              </p>
              <p>
                In the past I've been a professional songwriter and music label
                founder with international platin and gold records on my track
                record.
              </p>
              <p>
                Value on a larger scale is almost always the sum of small added
                values. That's why I try to remember that LEGO blocks can also
                be disassembled - which sometimes is the right thing to do to
                make progress. Stick to real-world values will almost always
                lead to the right decisions - both technical and economical.
              </p>
            </div>
          </section>
          <section class='vh50 bg-light-base'>
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
          {/* <mm-bricks /> */}
        </ion-content>
      </Host>
    );
  }
}
