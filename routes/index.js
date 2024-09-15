import express from "express";
import faqRoute from "./faq.route.js";

const router = express.Router();

const path = "/api-v1/";

router.use(`${path}faq`, faqRoute);

export default router;
