import express from "express";
import cors from "cors";
import bebidasRoutes from "../routes/bebidas.routes.js";

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //* Paths

        this.bebidasPath = "/api/bebidas";

        //* Middleware

        this.middleware()

        //* Routes

        this.routes();
    }

    middleware(){
        //? Configuracion de cors

        this.app.use(cors());
        
        //? Reconocer formato JSON

        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.bebidasPath,bebidasRoutes);
    }

    listener(){
        this.app.listen(this.port ,()=> {
            console.log(`Server is running in the port ${this.port}`);
        })
    }
}

export default Server;