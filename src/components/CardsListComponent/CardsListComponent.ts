import Component from "../Component/Component.js";

export class CardsListComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "pokemoms-list", "section");
  }

  public render(): void {
    super.render();
    this.element.innerHTML = `
    <section class="pokemoms-list">
        <ul class="pokemons-list__container">
          <li class="pokemon-list__card"></li>
          </ul>
      </section>`;
  }
}
