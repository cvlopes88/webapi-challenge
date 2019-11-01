

const express = require('express');


const server = express();

server.use(express.json());

const actRouter = require('./data/seeds/actionRouter');

const proRouter = require('./data/seeds/projectRouter');

server.get('/', (req, res) => {

});

server.use('/api/projects', proRouter)

server.use('/api/actions', actRouter);


server.listen(3000, () => {
    console.log('n\***************Server Running on Port 3000**************\n')
});