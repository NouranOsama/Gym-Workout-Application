import express from 'express';
import clientRouter from './routes/clientRouter';
import workoutRouter from './routes/workoutRouter'
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/clients', clientRouter)
app.use('/workouts', workoutRouter)

app.listen(3000, () => {
    console.log('Server is running on port 3000 http://localhost:3000');
});