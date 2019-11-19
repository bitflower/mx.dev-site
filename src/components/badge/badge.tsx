import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'mm-badge',
  styleUrl: 'badge.scss',
  shadow: true
})
export class Badge {
  @Prop()
  value: string;

  render() {
    return (
      <Host>
        <div class='badge'>{this.value}</div>
      </Host>
    );
  }
}
