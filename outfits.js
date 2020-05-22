class Outfits {
  constructor(title, garments = []) {
    this.id = Date.now(),
    this.title = title,
    this.garments = garments,
    this.background = ""
  }
}
