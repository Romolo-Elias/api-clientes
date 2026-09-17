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
            const { nome, email, uf } = req.body;
            const novoCliente = await cliente.create({nome: nome, email: email, uf: uf})
            res.status(201).json(novoCliente)
        } catch (erro){
            res.status(500).json({message: `${erro.message} Falha na requisição`})
        }
    }

    static async atualizarCliente (req, res){
        try{
            const id = req.params.id
            const { nome, email, uf } = req.body;
            const clienteAtualizado = await cliente.findByIdAndUpdate(id, {nome, email, uf}, { new: true, runValidators: true })
            res.status(200).json(clienteAtualizado)

        } catch (erro){
            res.status(500).json({message: `${erro.message} Falha na requisição`})
        }
    }

    static async deletarCliente (req, res){
        try{
            const id = req.params.id
            const clienteApagado = await cliente.deleteOne({_id: id})
            return res.status(204).end()
        } catch (erro){
            res.status(500).json({message: `${erro.message} Falha na requisição`})
        }
    }
}

export default clienteController;