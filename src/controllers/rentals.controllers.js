import { db } from "../database/database.connection.js";

export async function insertRent(req, res) {
    const { customerId, gameId, daysRentend } = req.body

    try {
        await db.query(`INSERT INTO rentals VALUES ($1,$2,$3);`, [customerId, gameId, daysRentend])
        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function deleteRent(req, res) {
    const { id } = req.params
    try {
        await db.query(`DELETE FROM rentals WHERE id=$1;`, [id])
        res.sendStatus(200)
    } catch (err) {
        res.status(500).send(err.message)
    }
}