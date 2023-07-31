import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello from from homepage');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
