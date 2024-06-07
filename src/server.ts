import express, {Application} from 'express';
import { addRoutes } from './routes';

const dotenv = require('dotenv');

dotenv.config();

const app: Application = express();
const port: number = Number(process.env.PORT) || 3000;

app.use(express.json());

addRoutes(app);

app.listen(port, () => {
  console.log(`Server is running on  port ${port}`);
});