import express, { Request, Response } from 'express';

const app = express();

const port: Number = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Node.js updated!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});