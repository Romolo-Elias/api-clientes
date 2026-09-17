import express from 'express'
import conectaNaDatabase from './config/dbConnect.js';
import routes from './routes/clientesRoutes.js';
import manipulador404 from './middlewares/manipulador404.js';
import manipuladorDeErros from './middlewares/manipuladorDeErros.js';

const conexao = await conectaNaDatabase();

conexao.on("error", (erro)=> {
    console.error("erro de conexao", erro)
})

conexao.once("open", () => {
    console.log("Conexão realizada com sucesso!")
})

const app = express();

app.use(express.json())
app.use(routes)

app.use(manipulador404);
app.use(manipuladorDeErros);

export default app