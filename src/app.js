import express from 'express'
import conectaNaDatabase from './config/dbConnect.js';
import routes from './routes/clientesRoutes.js';

const conexao = await conectaNaDatabase();

conexao.on("error", (erro)=> {
    console.error("erro de conexao", erro)
})

conexao.once("open", () => {
    console.log("Conexão realizada com sucesso!")
})

const app = express();
routes(app)

app.use(express.json())

export default app