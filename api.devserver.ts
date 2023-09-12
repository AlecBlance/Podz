import app from "./api.app.js";
import searchRouter from "./api/routes/search.js";
import playRouter from "./api/routes/play.js";

app.use("/api/search", searchRouter);
app.use("/api/play", playRouter);

app.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});
