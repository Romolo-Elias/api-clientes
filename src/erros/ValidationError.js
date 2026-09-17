import CastErro from "./CastErro.js";

class ValidationError extends CastErro{
    constructor(erro){
        const mensagemErro = Object.values(erro.errors)
        .map(Campoerro => Campoerro.message)
        .join("; ")
        super(`Os seguintes erros foram encontrados ${mensagemErro}`);
    }
}