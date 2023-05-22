export class PokemonApi {
  apiUrl: string;
  constructor() {
    this.apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
  }

  async getAllInfo() {
    const response = await fetch(this.apiUrl);
    const result = await response.json();
    return result.results;
  }
}
