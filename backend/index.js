import express from 'express';
import env from './config/envConfig.js';
import connectDB from './config/db.js';
import taskRoutes from './routes/taskRoutes.js';

const { PORT} = env;
const app = express();

connectDB();
app.use(express.json());
app.use('/api/tasks', taskRoutes);


app.get('/', (req, res) => {
    res.json({msg:'Hello World! '});
    });

const Port =  PORT || 5000;

app.listen(Port, () => console.log(`Server started on port ${Port} 🔥🔥`));