import express from 'express';
import { PORT } from "./env.js";
import { Error404 } from './pages/Error404.js';
import { publicRouter } from './route/publicRouter.js';
import { publicApiRouter } from './route/publicApiRouter.js';

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.use('/', publicRouter);
app.use('/', publicApiRouter)

app.get('*error', (req, res) => {
    return res.send(new Error404().render());
});

app.listen(PORT, () => {
    console.log(`WEB URL: http://localhost:${PORT}`);
});
