require('dotenv').config();

const express = require('express');


const server = express();

server.use(express.json());

const actRouter = require('./data/seeds/actionRouter');

const proRouter = require('./data/seeds/projectRouter');

server.get('/', (req, res) => {

});

server.use('/api/projects', proRouter)

server.use('/api/actions', actRouter);

const port = process.env.PORT;

server.listen(port, () => {
    console.log(`n\***************Server Running on Port ${port}**************\n`)
});