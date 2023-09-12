import { Router } from "express";
import extractAudio from "yt-audio-extractor";

const playRouter = Router();

playRouter.get("/", (req, res) => {
  if (!(typeof req.query.id === "string")) return;
  extractAudio(`https://www.youtube.com/watch?v=${req.query.id}`).pipe(res);
});

export default playRouter;
