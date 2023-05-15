import { Router } from "express";
import { getCustomers , insertCustomer, getCustomerById, updateCostumer} from "../controllers/customers.controllers.js";

const customerRouter= Router()

customerRouter.get("/customers",getCustomers)
customerRouter.get("/customers/:id",getCustomerById)
customerRouter.post("/customers",insertCustomer)
customerRouter.put("/customers/:id",updateCostumer)

export default customerRouter
