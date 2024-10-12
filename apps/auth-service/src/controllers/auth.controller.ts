import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'your_jwt_secret_key'; // Cambia esto por una clave secreta más segura

// Simular base de datos de usuarios
const users: { [key: string]: { password: string } } = {};

export const register = (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (users[username]) {
    return res.status(400).json({ message: 'EL USUARIO YA EXISTE' });
  }

  const hashedPassword = bcrypt.hashSync(password, 8);
  users[username] = { password: hashedPassword };

  res.status(201).json({ message: 'USUARIO REGISTRADO' });
};

export const login = (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = users[username];
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'CREDENCIALES INVALIDAS' });
  }

  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};
