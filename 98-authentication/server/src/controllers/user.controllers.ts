import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/user.models";
import jwt from "jsonwebtoken";

export const addUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  // Validamos el usuario existente
  const userExist = await User.findOne({ where: { username: username } });

  if (userExist) {
    return res.status(400).json({
      message: "Usuario ya existe",
    });
  }

  const hasPassword = await bcrypt.hash(password, 10);

  try {
    const user = await User.create({ username, password: hasPassword });

    res.json({
      message: "User Created",
      user,
    });
  } catch (error) {
    res.status(400).json({
      message: "Bad Reques",
      error,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  // Verificamos que el usuario exista
  const user: any = await User.findOne({ where: { username: username } });

  if (!user) {
    return res.status(400).json({
      message: "Credenciales Incorrectas",
    });
  }

  // Verificando el password
  const passwordValid = await bcrypt.compare(password, user.password);
  if (!passwordValid) {
    return res.status(400).json({
      message: "Credenciales Incorrectas",
    });
  }

  // Generando Token
  const token = jwt.sign(
    {
      sub: user.id,
      username: user.username,
    },
    process.env.SECRET_TOKEN || "jnkjNKnjnJNJNjnopkOPKOPIHK"
  );

  res.json({
    message: "Authentication",
    token,
  });
};
