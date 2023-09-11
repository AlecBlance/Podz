import { Router } from "express";
import searchService from "../services/search";

const searchRouter = Router();

searchRouter.get("/:query", async (req, res) => {
  res.json(await searchService.search(req.params.query));
});

export default searchRouter;
