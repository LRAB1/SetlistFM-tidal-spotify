const http = require('https');
const fmRouter = require('../routes/fm.router');
const app = require('./app');

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

/*app.get('/', (req, res) => {
    res.send('Hello World!')
});*/

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

async function startServer() {
   // await fmRouter();
};

startServer();