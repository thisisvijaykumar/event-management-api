import Listing from "../models/listing";

class ListingSerivce {
  static async createListing(data) {
    const value = await Listing.save(data);
    return value;
  }

  static async getListingById(options) {
    const data = await Listing.findOne(options);
    return data;
  }

  static async getAllListings(options) {
    try {
      const data = await Listing.find(options);
      return data;
    } catch (err) {
      return err;
    }
  }
}

export default ListingSerivce;
