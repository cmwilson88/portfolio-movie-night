import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';


// Import Routes
import movies from './routes/movies';
import users from './routes/users';

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use('/api/movies', movies);
app.use('/api/users', users)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))