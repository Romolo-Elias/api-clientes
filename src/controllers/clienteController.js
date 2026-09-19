import cliente from "../models/cliente.js";
import Erro404 from "../erros/Erro404.js";

class clienteController {

    static async listarClientes (req, res, next){
        try{
            const listaClientes = await cliente.find({})
            
            res.status(200).json(listaClientes)
        } catch (erro) {
           next(erro)
        }
    }

    static async listarCliente (req, res, next){
        try{
            const id = req.params.id

            const listaCliente = await cliente.findById(id)

            if(listaCliente !== null){
                res.status(200).json(listaCliente);
            }else{
                next(new Erro404("Cliente não encontrado"));
            }
        } catch (erro){
            next(erro);
        }
    }

    static async criarCliente (req, res, next){
        try{
            const { nome, email, uf } = req.body;
            const novoCliente = await cliente.create({nome: nome, email: email, uf: uf})

            res.status(201).json(novoCliente)
        } catch (erro){
            next(erro);
        }
    }

    static async atualizarCliente (req, res, next){
        try{
            const id = req.params.id
            const { nome, email, uf } = req.body;
            const clienteAtualizado = await cliente.findByIdAndUpdate(id, {nome, email, uf}, { new: true, runValidators: true })

            if(clienteAtualizado !== null){
                res.status(200).json(clienteAtualizado)
            } else{
                next(new Erro404("Cliente não encontrado, não foi possivel fazer a atualização"))
            }
        } catch (erro){
            next(erro)
        }
    }

    static async deletarCliente (req, res, next){
        try{
            const id = req.params.id
            const clienteApagado = await cliente.findByIdAndDelete(id)

            if(clienteApagado !== null){
                return res.status(204).end()
            }else{
                next(new Erro404("Cliente não encontrado, não foi possivel fazer a exclusão"))
            }
        } catch (erro){
            next(erro)
        }
    }
}

export default clienteController;