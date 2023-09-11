import { Router } from "express";
import searchService from "../services/search.js";

const searchRouter = Router();

searchRouter.get("/", async (req, res) => {
  if (!(typeof req.query.query === "string")) return;
  res.json(await searchService.search(req.query.query));
});

export default searchRouter;
