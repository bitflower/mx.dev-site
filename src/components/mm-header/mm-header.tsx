import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'mm-header',
  styleUrl: 'mm-header.scss'
})
export class MmHeader {
  render() {
    return (
      <Host>
        <header class='bg-light-base color-dark-shade'>
          <div class='navbar-brand'>
            <img src='assets/logo.svg' />
          </div>
          <h3>
            <span class='title'>Matthias Max</span>
            <span class='subtitle divider'>&nbsp;|&nbsp;</span>
            {/* <span class='subtitle'>
              Creating value through technology since 2001
            </span> */}
            {/* <span class='subtitle'>Business value through technology</span> */}
            {/* <span class='subtitle'>Building </span> */}
            <span class='subtitle'>Creator of digital value</span>
            {/* <span class='subtitle'>Building digital products since 2001</span> */}
          </h3>
        </header>
      </Host>
    );
  }
}
