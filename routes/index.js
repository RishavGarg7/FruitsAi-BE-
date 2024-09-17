import express from "express";
import faqRoute from "./faq.route.js";
import userRoute from "./user.route.js";

const router = express.Router();

const path = "/api-v1/";

router.use(`${path}faq`, faqRoute);
router.use(`${path}user`, userRoute);

export default router;
