import { Router } from "express";
import { insertRent,deleteRent } from "../controllers/rentals.controllers.js";

const rentRouter= Router()

rentRouter.get("/rentals",)
rentRouter.post("/rentals",insertRent)
rentRouter.delete("/rentals/:id", deleteRent)

export default rentRouter