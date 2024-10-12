import express from 'express';
import { json } from 'body-parser';
import authRouter from './routes/auth.routes';
import cors from 'cors';
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(json());

app.use('/auth', authRouter);

app.listen(port, () => {
  console.log(`Auth service running on port ${port}`);
});
