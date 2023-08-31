import path from 'node:path';

import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 80;

app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req: Request, res: Response) => {
// res.status(200).sendFile(path.jo)
// });

app.listen(port, () => {
  console.log(`[server]: Server is running at <https://localhost>:${port}`);
});