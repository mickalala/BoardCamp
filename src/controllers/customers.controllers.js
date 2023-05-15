import { db } from "../database/database.connection.js";
import joi from "joi";

export async function getCustomers(req, res) {

    try {
        const allCustomers = await db.query(`SELECT * FROM customers;`)
        res.status(200).send(allCustomers.rows)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getCustomerById(req, res) {
    const { id } = req.params
    try {
        const customer = await db.query(`SELECT * FROM customers WHERE id=$1;`, [id])
        res.send(customer.rows[0])

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function insertCustomer(req, res) {
    //falta regras do negocio
    const { name, phone, cpf, birthday } = req.body
    const customersSchema = joi.object({
        name: joi.string().required(),
        phone: joi.string().required(),
        cpf: joi.string().required(),
        birthday: joi.string().required()
    })

    const validation = customersSchema.validate(req.body, { abortEarly: false })
    if (validation.error) {
        res.status(400).send('Campos inválidos');
        return;
    }

    try {
        await db.query(` INSERT INTO customers (name,phone,cpf,birthday)
         VALUES ($1,$2,$3,$4); `, [name, phone, cpf, birthday])
        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function updateCostumer(req, res) {
    //falta regraas
    const { id } = req.params
    const { name, cpf, phone, birthday } = req.body
    try {
        await db.query(`UPDATE customers SET name = '${name}', phone = '${phone}', cpf = '${cpf}', 
        birthday = '${birthday}' WHERE id=$1;`, [id])
        res.sendStatus(200)

    } catch (err) {
        res.status(500).send(err.message)
    }
}