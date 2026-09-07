import express from "express"
import clienteController from "../controllers/clienteController.js"

const routes = express.Router()

routes.get("/clientes", clienteController.listarClientes)
routes.get("/clientes/:id", clienteController.listarCliente)