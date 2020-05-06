class Outfits {
  constructor() {
    this.id = null,
    this.title = "",
    this.garments = [],
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
