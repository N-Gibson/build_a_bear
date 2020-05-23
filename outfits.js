class Outfits {
  constructor(title, garments = [], background = '') {
    this.id = Date.now(),
    this.title = title,
    this.garments = garments,
    this.background = background
  }
}
