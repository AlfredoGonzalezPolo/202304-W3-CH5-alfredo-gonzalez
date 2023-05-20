export class PokemonApi {
  apiUrl: string;
  constructor() {
    this.apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
  }

  async getAllInfo() {
    const response = await fetch(this.apiUrl);
    return response.json();
  }
}
