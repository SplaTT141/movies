import express from 'express';
import { PORT } from "./env.js";
import { Error404 } from './pages/public/Error404.js';
import { publicPageRouter } from './route/publicPageRouter.js';
import { publicApiRouter } from './route/publicApiRouter.js';
import { adminPageRouter } from './route/adminPageRouter.js';
import { cookieParser } from './middleware/cookieParser.js';
import { userData } from './middleware/userData.js';

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.use(cookieParser);
app.use(userData);

app.use('/', publicPageRouter);
app.use('/', publicApiRouter);
app.use('/', adminPageRouter);

app.get('*error', (req, res) => {
    return res.send(new Error404().render());
});

app.listen(PORT, () => {
    console.log(`WEB URL: http://localhost:${PORT}`);
});
