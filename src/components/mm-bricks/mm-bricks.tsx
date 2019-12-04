import { Component, Host, h, State, Listen } from '@stencil/core';

@Component({
  tag: 'mm-bricks',
  styleUrl: 'mm-bricks.scss',
  shadow: true
})
export class Bricks {
  @State()
  protected show: boolean = false;

  @Listen('scroll', { target: 'window' })
  handleScroll(ev) {
    console.log('the body was scrolled', ev);
  }

  componentDidLoad() {
    setTimeout(() => {
      this.show = true;
    }, 2000);
  }

  render() {
    return (
      <Host>
        <div class={{ brick: true, land: this.show }}></div>
      </Host>
    );
  }
}
