import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;



app.listen(PORT, () => console.log(`Listening on port ${PORT}`))