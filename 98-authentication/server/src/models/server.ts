import express, { Application } from "express";
import cors from "cors";
import routesProduct from "../routers/product.routers";
import routesUser from "../routers/user.routers";
import sequelize from "../db/connection";
import { Product } from "./product.models";
import User from "./user.models";

class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "9000";
    // this.routes()
  }

  midlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use("/api/products", routesProduct);
    this.app.use("/api/users", routesUser);
  }

  async dbConnect() {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");

      // Tablas
      await Product.sync({ alter: true });
      await User.sync({ alter: true });
    } catch (error) {
      console.error("Unable to connect to the database");
    }
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Aplicacion corriendo en el puerto " + this.port);
    });
  }
}

export default Server;
