import { Router } from "express";
import gameRouter from "./games.routes.js";
import customerRouter from "./customers.routes.js";
import rentRouter from "./rentals.routes.js";

const router = Router()

router.use(gameRouter)
router.use(customerRouter)
router.use(rentRouter)

export default router