import app from "../api.app.js";
import playRouter from "./routes/play.js";

app.use("/api/play", playRouter);

export default app;
