import { Router } from "express";
import searchService from "../services/search.js";

const searchRouter = Router();

searchRouter.get("/", async (req, res) => {
  if (!(typeof req.query.query === "string")) return;
  const results = await searchService.search(req.query.query);
  if ("error" in results) return res.json(results);
  if ("single" in req.query) return res.json(results[0]);
  res.json(results);
});

export default searchRouter;
