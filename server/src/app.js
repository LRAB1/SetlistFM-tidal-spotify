const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
});

app.get('/', (req, res) => {
    res.send('Homepage')
});
app.get('/test', lastFmRouter)