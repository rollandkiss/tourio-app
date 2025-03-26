// IMPORTS
import mongoose from "mongoose";

// Destructure Schema from mongoose library
const { Schema } = mongoose;

// Define Schema class for "places" > collection in MongoDB
const placesSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: false },
  mapURL: { type: String, required: false },
  description: { type: String, required: false },
});

// Define Model based on "places" Schema > sigular written for collections in MongoDB
const PlaceModel = mongoose.models.Place || mongoose.model("Place", placesSchema);

// EXPORTS
export default PlaceModel;