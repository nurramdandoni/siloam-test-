import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Route GET sederhana
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript API!');
});

// Route POST sederhana
app.post('/data', (req: Request, res: Response) => {
  const { name, age } = req.body;
  res.json({ message: `Received data: Name = ${name}, Age = ${age}` });
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
