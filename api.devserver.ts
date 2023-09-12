import app from "./api.app.js";
import searchRouter from "./api/routes/search.js";

app.use("/api/search", searchRouter);

app.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});
