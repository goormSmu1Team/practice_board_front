import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const targetUrlBase = "http://121.185.8.167:9090/boards"; // Base URL

  try {
    // Let's assume you want to get 10 boards (ids 1 through 10)
    const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Adjust this range as necessary
    const requests = ids.map(async (id) => {
      try {
        const response = await axios.get(`${targetUrlBase}/${id}`);
        return response.data;
      } catch (error) {
        // console.error(`Failed to fetch /boards/${id}:`, error.message);
        return null; // Return null if a request fails
      }
    });

    // Wait for all requests to resolve
    const responses = await Promise.all(requests);

    // Filter out any failed (null) responses
    const allBoards = responses.filter((board) => board !== null);

    if (allBoards.length === 0) {
      throw new Error("No boards could be fetched.");
    }

    // Send the combined data back to the client
    res.status(200).json(allBoards);
  } catch (error: any) {
    console.error("Error fetching boards:", error.message);
    // Send an error response
    res.status(500).json({ message: error.message });
  }
}
