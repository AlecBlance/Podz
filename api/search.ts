import app from "../api.app.js";
import searchRouter from "./routes/search.js";

app.use("/api/search", searchRouter);

export default app;
