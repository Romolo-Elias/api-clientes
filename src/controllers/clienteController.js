import cliente from "../models/cliente.js";

class clienteController {

    static async listarClientes (req, res){
        try{
            const listaClientes = await cliente.find({})
            res.status(200).json(listaClientes)
        } catch (erro) {
            res.status(500).json({message: `${erro.message} Falha na requisição`})
        }
    }

    static async listarCliente (req, res){
        try{
            const id = req.params.id
            const listaCliente = await cliente.findById(id)
            res.status(200).json(listaCliente)
        } catch (erro){
            res.status(500).json({message: `${erro.message} Falha na requisição`})
        }
    }

    static async criarCliente (req, res){
        try{

        } catch (erro){
            res.status(500).json({message: `${erro.message} Falha na requisição`})
        }
    }
}

export default clienteController;