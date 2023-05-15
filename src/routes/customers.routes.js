import { Router } from "express";
import { getCustomers , insertCustomer, getCustomerById} from "../controllers/customers.controllers.js";

const customerRouter= Router()

customerRouter.get("/customers",getCustomers)
customerRouter.get("/customers/:id",getCustomerById)
customerRouter.post("/customers",insertCustomer)

export default customerRouter
