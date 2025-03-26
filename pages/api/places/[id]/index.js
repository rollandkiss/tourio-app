// PATH: API > PLACES > ID (dynamic) : Dynamic Route API
//
// IMPORTS
import dbConnect from "@/db/connect";
import PlaceModel from "@/db/models/places";

// FUNCTION: DB Handler
export default async function handler(request, response) {
  // Call Database Connection defined in "/db/connect.js"
  await dbConnect();

  // Destructure id from request > stored in query object
  const { id } = request.query;

  // Handle GET request
  if (request.method === "GET") {
    const place = await PlaceModel.findById(id);

    // Check if place can be found > if not write error
    if (!place) {
      response.status(404).json({ status: "Not found" });
      return;
    }

    response.status(200).json(place);
    return;
  }

  // Handle POST request
  if (request.method === "POST") {
    const data = request.body;
    await PlaceModel.create(data);
    return;
  }

  // Handle NOT DEFINED request methods
  response.status(405).json({ status: "Method not allowed." });
}
