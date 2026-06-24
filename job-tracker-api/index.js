// // 1. Bring in the built-in HTTP module (No npm install required!)
// const http = require("http");

// // 2. Create the server.
// // Every time a browser or frontend hits this server, this callback function runs.
// const server = http.createServer((req, res) => {
//   // Log what the frontend is asking for
//   console.log(`Incoming request: ${req.method} request to ${req.url}`);

//   // Set the headers so the browser knows we are sending JSON data back
//   res.writeHead(200, { "Content-Type": "application/json" });

//   // Send the actual data and close the connection
//   res.end(
//     JSON.stringify({
//       success: true,
//       message: "You have successfully built a raw Node server!",
//     }),
//   );
// });

// // 3. Define the port and start listening
// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(
//     `Warehouse Factory (Server) is officially running on http://localhost:${PORT}`,
//   );
// });

/* old code RAW node js */

/* --------------> express code below */

const express = require("express");

// Initialize the Express application
const app = express();
const PORT = 3000;

// Express makes routing incredibly clean
app.get("/", (req, res) => {
  console.log("Incoming request: GET request to /");

  // Notice how much simpler this is than the raw Node version!
  res.json({
    success: true,
    message: "You have successfully built an Express server!",
  });
});

// Start the engine
app.listen(PORT, () => {
  console.log(
    `Warehouse Factory (Express) is officially running on http://localhost:${PORT}`,
  );
});
