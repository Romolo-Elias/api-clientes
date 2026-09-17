import mongoose from "mongoose";
import CastErro from "../erros/CastErro.js";
import ValidationError from "../erros/ValidationError.js";
import Errobase from "../erros/ErroBase.js";

function manipuladorDeErros(erro, req, res, next){
    if(erro instanceof mongoose.Error.CastError){
        new CastErro().enviarResposta(res);
    }else if (erro instanceof mongoose.Error.ValidationError){
        new ValidationError(erro).enviarResposta(res);
    }else if (erro instanceof Errobase){
        erro.enviarResposta(res);
    }else {
        new Errobase().enviarResposta(res)
    }
}

export default manipuladorDeErros;