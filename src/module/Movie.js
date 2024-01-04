export class Movie {
  constructor(title, sinopse, avaible = []) {
    this.title = title;
    this.sinopse = sinopse;
    this.avaible = avaible;
    this.createdAt = new Date();
  }
}
