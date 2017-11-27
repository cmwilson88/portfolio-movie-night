import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';


// Import Routes
import movies from './routes/movies';

const app = express();
const PORT = 3001;


app.use('/api/movies', movies);


app.listen(PORT, () => console.log(`Listening on port ${PORT}`))