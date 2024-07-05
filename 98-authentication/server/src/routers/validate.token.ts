import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const headerToken = req.headers["authorization"];

  if (headerToken != undefined && headerToken.startsWith("Bearer")) {
    try {
      const token = headerToken.split(" ")[1];
      jwt.verify(
        token,
        process.env.SECRET_TOKEN || "jnkjNKnjnJNJNjnopkOPKOPIHK"
      );
      next();
    } catch (error) {
      res.status(401).json({
        message: "Acceso Denegado",
      });
    }
  } else {
    res.status(401).json({
      message: "Acceso Denegado",
    });
  }
};

export default validateToken;
