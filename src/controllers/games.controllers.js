import { db } from "../database/database.connection.js";
import joi from "joi"

export async function getGames(req, res) {
    try {
        const allGames = await db.query(`SELECT * FROM games;`)
        console.table(allGames.rows)
        res.status(200).send(allGames.rows)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function insertGames(req, res) {
    //falta as regras do negócio
    const { name, image, stockTotal, pricePerDay } = req.body
    const gameSchema = joi.object({
        name: joi.string().required(),
        image: joi.string().required(),
        stockTotal: joi.number().required(),
        pricePerDay: joi.number().required()
    })
    const validation = gameSchema.validate(req.body, { abortEarly: false })
    if (validation.error) {
        res.status(400).send('Campos inválidos');
        return;
    }

    try {
        await db.query(`INSERT INTO games (name, image, "stockTotal", "pricePerDay") 
        VALUES ($1, $2, $3, $4)`, [name, image, stockTotal, pricePerDay])
        res.sendStatus(201)

    } catch (err) {
        res.status(500).send(err.message)
    }
}