import express from 'express';
import render from './views/render';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(render());
});

app.listen(3000, () => {
    console.log('Server running on port 3000...');
})
