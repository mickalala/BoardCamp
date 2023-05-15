import { db } from "../database/database.connection.js";

export async function getGames(req, res) {
    try {
        const allGames = await db.query(`SELECT * FROM games;`)
        console.table(allGames.rows)
        res.status(200).send(allGames.rows[0])
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function insertGames(req, res) {
    try {

    } catch (err) {
        res.status(500).send(err.message)
    }
}