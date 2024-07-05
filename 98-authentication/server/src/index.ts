import Server from "./models/server";
import dotenv from "dotenv";

// Configuracion dotenv
dotenv.config();

const server = new Server();
server.midlewares();
server.routes();
server.dbConnect();
server.listen();
