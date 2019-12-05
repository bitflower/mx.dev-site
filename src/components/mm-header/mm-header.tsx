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
          <h3>
            <span class='title'>Matthias Max</span>
            <span class='subtitle divider'>&nbsp;|&nbsp;</span>
            <span class='subtitle'>Digital Product Developer</span>
          </h3>
        </header>
      </Host>
    );
  }
}
