// src/index.ts
import express, { type Application, type Request, type Response } from 'express';
import products from './data.ts';

const SECRET_WORDS = ['Morder', 'Rivendell', 'Gondor', 'Eregion', 'Rohon'];
let currIndex = 0;

const app: Application = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const getWord = () => {
  const currWord = SECRET_WORDS[currIndex];
  if (currIndex === SECRET_WORDS.length - 1) currIndex = 0;
  else currIndex += 1;
  return currWord;
};

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express with TypeScript!');
});

app.get('/api/special', (req: Request, res: Response) => {
  setTimeout(() => {
    return res.json(getWord());
  }, 2000);
});

app.post('/api/type', (req: Request, res: Response) => {
  setTimeout(() => {
    return res.json(`SERVER SAYS: youe typed - ${req.body.text}`);
  }, 1000);
});

app.post('/api/track', (req: Request, res: Response) => {
  const data = req.body;
  return res.status(200).json(`SERVER SAYS: Scroll depth ${data?.depth}`);
});

app.get('/api/get-products', (req: Request, res: Response) => {
  console.log('products ==>', products);

  return res.status(200).json(products);
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
