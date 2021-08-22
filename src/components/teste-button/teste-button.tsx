import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'teste-button',
  styleUrl: 'teste-button.css',
  shadow: true,
})
export class TesteButton {
  @Prop() text: string;

  render() {
    return <button type="Button">{this.text}</button>;
  }
}
