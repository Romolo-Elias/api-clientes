import mongoose, { mongo } from "mongoose";

const clienteSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: {type: String, required: true, unique: true, lowercase: true},
    uf: {
    type: String,
    required: true,
    enum: ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG",
        "PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"]
}
})

const cliente = mongoose.model("clientes", clienteSchema)

export default cliente