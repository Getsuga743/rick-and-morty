export default class API {
  async getCharacterByNum(num) {
    let data = await (
      await fetch(`https://rickandmortyapi.com/api/character/${num}`)
    ).json();
    return data
  }
}
