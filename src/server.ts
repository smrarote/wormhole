import http from "node:http";
import app from "./app.js";
let server = http.createServer(app);

server
  .listen(process.env.PORT || 3000)
  .on("listening", () =>
    console.log(`🟢 Running  : ${process.env.PORT || 3000}`)
  );

server.close(() => console.log("🔴 Stopped"));
