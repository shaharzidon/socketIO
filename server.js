const express = require('express');
const http = require('http');
const app = express();
const path = require('path');
const server = http.createServer(app);



// app.get('/', (req, res) => {
//     res.send('chello world');
// })

app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000 || process.env.PORT;
server.listen(PORT, () => {
    console.log(`Youre listening to port ${PORT}`);
})