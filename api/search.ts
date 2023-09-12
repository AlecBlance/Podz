import express from "express";
import searchRouter from "./routes/search.js";

const app = express();
app.use(express.json());
app.use("/api/search", searchRouter);

if (process.env.NODE_ENV === "development") {
  app.listen(3001, () => {
    console.log("Server running at http://localhost:3001");
  });
}

export default app;
