import Errobase from "./ErroBase.js";

class Erro404 extends Errobase{
    constructor() {
        super("Página não encontrada", 404)
    }
}

export default Erro404;