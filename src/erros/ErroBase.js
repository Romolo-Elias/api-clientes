class Errobase extends Error{
    constructor (msg = "Erro interno do servidor", statusCode = 500) {
        super(msg);
        this.statusCode = statusCode;
    }

    enviarResposta(res){
        res.status(this.statusCode).send({
            mensagem: this.message,
            status: this.statusCode
        })
    }
}

export default Errobase;