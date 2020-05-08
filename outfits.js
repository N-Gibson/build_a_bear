class Outfits {
  constructor(title, garments) {
    this.id = null,
    this.title = title,
    this.garments = garments || [],
    this.background = ""
  }

  addGarment(garment) {
    this.garments.push(garment)
  }

  removeGarment(garment) {
    const garmentFilter = this.garments.filter(garments => garments !== garment);

    this.garments = garmentFilter;
  }
}
