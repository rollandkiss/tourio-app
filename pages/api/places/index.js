// PATH: API > PLACES : Homepage API
//
// IMPORTS
import dbConnect from "@/db/connect";
import PlaceModel from "@/db/models/places";

// FUNCTION: DB Handler
export default async function handler(request, response) {
  // Call Database Connection defined in "/db/connect.js"
  await dbConnect();

  // Handle GET request
  if (request.method === "GET") {
    const places = await PlaceModel.find();
    response.status(200).json(places);
    return;
  }

  // Handle NOT DEFINED request methods
  response.status(405).json({ status: "Method not allowed." });
}
