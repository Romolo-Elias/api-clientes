const express = require('express');
const app = express();
const port = 3000;
const { randomUUID } = require('crypto');

app.use(express.json())


const clientes = [];
const ufs = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF",
    "ES", "GO", "MA", "MT", "MS", "MG", "PA",
    "PB", "PR", "PE", "PI", "RJ", "RN", "RS",
    "RO", "RR", "SC", "SP", "SE", "TO"
];

app.get("/", (req, res) =>{
    res.send(`Servidor aberto na porta ${port}`)
})

app.get("/clientes", (req, res) =>{
    res.json(clientes)
})

app.post("/clientes", (req, res) =>{
    const { nome, email, uf } = req.body;
    const emailExiste = clientes.find(cliente => cliente.email === email)
    const UfExiste = ufs.includes(uf)

    if(!nome){
        return res.status(400).send("Erro")
    }
    
    if(!email){
        return res.status(400).send("Erro")
    }

    if(emailExiste){
    return res.status(400).send("E-mail já existe")
    }

    if(!UfExiste){
        return res.status(400).send("Essa uf não existe")
    }

    const id = randomUUID();
    const cliente = { id, nome, email, uf };
    clientes.push(cliente);

    res.status(201).json(cliente);

})

app.listen(port, () => {
    console.log("Servidor aberto na porta " + port)
})