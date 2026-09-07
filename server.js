import 'dotenv/config';
import app from "./src/app"

const port = process.env.PORT

app.listen(port, () => {
    console.log("Servidor aberto na porta " + port)
})

