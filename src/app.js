import express from 'express'
import conectaNaDatabase from './src/config/dbConnect.js';
import cliente from './src/models/cliente.js';

const conexao = await conectaNaDatabase();

conexao.on("error", (erro)=> {
    console.error("erro de conexao", erro)
})

conexao.once("open", () => {
    console.log("Conexão realizada com sucesso!")
})

const app = express();

app.use(express.json())

app.get("/", (req, res) =>{
    res.send(`Servidor aberto na porta ${port}`)
})

app.post("/clientes", (req, res) =>{
    const { nome, email, uf } = req.body;

    if(!nome){
        return res.status(400).send("Erro")
    }
    
    if(!email){
        return res.status(400).send("Erro")
    }

    const emailExiste = clientes.find(cliente => cliente.email === email)

    if(emailExiste){
    return res.status(400).send("E-mail já existe")
    }

    
    if(!ufs.includes(uf)){
        return res.status(400).send("Essa uf não existe")
    }

    const id = randomUUID();
    const cliente = { id, nome, email, uf };
    clientes.push(cliente);

    res.status(201).json(cliente);
})

app.put("/clientes/:id", (req, res)=>{
    const id = req.params.id
    const { nome, email, uf } = req.body;
    const clienteIndex = clientes.findIndex(cliente => cliente.id === id)
    const emailExiste = clientes.find(cliente => cliente.email === email && cliente.id !== id)

    if (clienteIndex === -1){
        return res.status(404).send("Erro")
    }

    if(!nome){
        return res.status(400).send("Erro")
    }
    
    if(!email){
        return res.status(400).send("Erro")
    }
    
    if(!ufs.includes(uf)){
        return res.status(400).send("Essa uf não existe")
    }
    
    if(emailExiste){
        return res.status(400).send("Erro")
    }

    const clienteAtualizado = {id, nome, email, uf}
    
    clientes[clienteIndex] = clienteAtualizado

    return res.status(200).json(clienteAtualizado)
})

app.delete("/clientes/:id", (req, res)=>{
    const id = req.params.id
    const clienteIndex = clientes.findIndex(cliente => cliente.id === id)

    if (clienteIndex === -1){
        return res.status(404).send("Erro")
    }else{
        clientes.splice(clienteIndex, 1)
        return res.status(204).end()
    }
    
})