import { Component } from './components';
import { PokemonCard } from '../model/pokemon';
import { PokemonApi } from '../data/api.pokemon';

export class Card extends Component {
  pokemon!: PokemonCard[];
  repository: PokemonApi;
  constructor(selector: string) {
    super(selector);
    this.pokemon = [];
    this.repository = new PokemonApi();
    this.handleLoad();
  }

  async handleLoad() {
    this.pokemon = await this.repository.getAllInfo();
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    const list = this.pokemon
      .map(
        (item: any) => `
          <li class="pokemon">
            <p class="pokemon__name">${item.name.toUpperCase()}</p>
            <img class="pokemon__image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${
              item.url.split('/')[6]
            }.gif " height=100>
            </li>
            `
      )
      .join('');

    return `
      <ul class="pokemon-list">
      ${list}
      </ul>
      <p>You are watching 
      ${this.pokemon.length}/${list.length} pokemon in this page!</p>
      <ul class="buttons_list">
              <li><button>Previous page</button></li>
              <li><button>Next page</button></li>
      </ul>
      `;
  }
}
