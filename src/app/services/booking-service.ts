import Listing from "../models/listing";
import Booking from "../models/booking";

class BookingSerivce {
  static async createBooking(data) {
    try {
      const listing = await Listing.findOneOrFail({ id: data.listing_id });
      if (listing.available_seats >= data.booked_seats) {
        const value = await Booking.save(data);
        await Listing.update(
          { id: listing?.id },
          { available_seats: listing.available_seats - data.booked_seats }
        );
        return value;
      }else{
          throw "There is no tickets are available";
      }
    } catch (err) {
      return err;
    }
  }

  static async getBookingById(params) {
    try {
      const data = await Booking.findOne(params);
      return data;
    } catch (err) {
      return err;
    }
  }

  static async getAllBookingsByUser(options) {
    try {
      const data = await Booking.find(options);
      return data;
    } catch (err) {
      return err;
    }
  }
  static async getAllBookingsByListing(options) {
    try {
      const data = await Booking.find(options);
      return data;
    } catch (err) {
      return err;
    }
  }
}

export default BookingSerivce;
