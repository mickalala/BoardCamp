import { Router } from "express";
import { getCustomers , insertCustomer} from "../controllers/customers.controllers.js";

const customerRouter= Router()

customerRouter.get("/customers",getCustomers)
customerRouter.get("/customers/:id",)
customerRouter.post("/customers",insertCustomer)

export default customerRouter
