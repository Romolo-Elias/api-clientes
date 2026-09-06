import mongoose from "mongoose";

async function conectaNaDatabase() {
    mongoose.connect("mongodb+srv://romolopsn2004_db_user:8zi5kmO8Ft9Wtxk0@cluster0.qhiuqk2.mongodb.net/?clientes=Cluster0");

    return mongoose.connect;
} 

export default conectaNaDatabase