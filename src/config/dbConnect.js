import 'dotenv/config';
import mongoose from "mongoose";
import { setServers } from "node:dns/promises";
setServers(["8.8.8.8", "1.1.1.1"]);


async function conectaNaDatabase() {
    const url = process.env.MONGOURL
    
    mongoose.connect(url)

    return mongoose.connection;
} 

export default conectaNaDatabase