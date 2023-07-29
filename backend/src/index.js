import dotenv from "dotenv"
import conectarDB from "./config/config.js"
import Server from "./models/Server.js"

dotenv.config();

const server = new Server();

server.listener();

conectarDB();