import Errobase from "./ErroBase.js";

class CastErro extends Errobase {
    constructor (msg = "Um ou mais valores não estão no formato esperado", statusCode = 400) {
        super(msg, statusCode);
    }
}

export default CastErro;