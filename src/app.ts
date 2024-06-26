import express,{Request,Response,NextFunction} from 'express';
import './websocket';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response,next:NextFunction) => {
    res.send('Welcome to the server!');
});

app.get('/api', (req: Request, res: Response,next:NextFunction) => {
    res.send('Welcome to the API!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});