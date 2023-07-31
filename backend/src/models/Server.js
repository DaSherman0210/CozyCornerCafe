import express from "express";
import cors from "cors";
import bebidasRoutes from "../routes/bebidas.routes.js";
import empleadosRoutes from "../routes/empleados.routes.js";
import facturasRoutes from "../routes/facturas.routes.js";
import toppingsRouter from "../routes/toppings.routes.js";

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //* Paths

        this.bebidasPath = "/api/bebidas";
        this.empleadosPath = "/api/empleados";
        this.facturasPath = "/api/facturas";
        this.toppingsPath = "/api/toppings";

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
        this.app.use(this.empleadosPath,empleadosRoutes);
        this.app.use(this.facturasPath,facturasRoutes);
        this.app.use(this.toppingsPath,toppingsRouter);
    }

    listener(){
        this.app.listen(this.port ,()=> {
            console.log(`Server is running in the port ${this.port}`);
        })
    }
}

export default Server;