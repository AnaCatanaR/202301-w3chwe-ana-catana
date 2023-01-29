import Component from "../Component/Component.js";

export class HeaderComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "header", "header");
  }

  render(): void {
    super.render();
    this.element.innerHTML = `<div class="header-container">
    <img src="/img/pokemon-logo.svg" alt="logo-pokemon" class="header-container__logo"/>
    <h1 class="header-container__title">Pokémon List</h1>
    <button class="header-container__button">GO TO TEAM</button>
    </div>`;
  }
}
