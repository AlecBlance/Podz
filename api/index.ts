import express from "express";
import cors from "cors";
import searchRouter from "./routes/search.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/search", searchRouter);

// app.listen(3001, () => {
//   console.log("Server running at http://localhost:3001");
// });

export default app;
