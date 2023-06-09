import { Component } from './components';

export class Header extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <header class="header">
    <img class="logo" src="./pokemon-logo.svg" alt="Pokemon logo">
  </header>
    `;
  }
}
