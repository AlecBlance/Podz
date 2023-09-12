import express from "express";

import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.listen(3001, () => {
    console.log("Server running at http://localhost:3001");
  });
}

export default app;
