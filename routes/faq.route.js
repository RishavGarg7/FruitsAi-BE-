import express from "express";
import {
  createfaq,
  updatefaq,
  getfaq,
  deletefaq,
} from "../controllers/faq.controller.js";

const router = express.Router();

router.post("/add", createfaq);
router.get("/", getfaq);
router.put("/edit", updatefaq);
router.delete("/delete/:id", deletefaq);

export default router;
