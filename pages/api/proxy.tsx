import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Incoming request:", req.method, req.query, req.body); // Log request details
  // rest of your code

  const { method, body, query } = req;
  const { id } = query; // Get the ID from the query

  // Build the target URL dynamically based on the request
  const targetUrl = `http://121.185.8.167:9090/board${id ? `/${id}` : ""}`; // Path with ID

  try {
    // Pass along method, body, and query parameters if necessary
    const response = await axios({
      method,
      url: targetUrl,
      data: body,
      params: req.query, // Forward any query params
    });

    // Send back the external API's response
    res.status(response.status).json(response.data);
  } catch (error: any) {
    // Handle error and forward the error status and message
    res.status(error.response?.status || 500).json({ message: error.message });
  }
}
