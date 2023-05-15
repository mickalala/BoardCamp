import { Router } from "express";
import { getGames, insertGames } from "../controllers/games.controllers.js";

const gameRouter=Router()

gameRouter.get("/games",getGames)
gameRouter.post("/games",insertGames)

export default gameRouter