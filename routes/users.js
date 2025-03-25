let express = require('express');
let routes = express.Router();

routes.get('/', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        users:[{
            name: 'Hcode',
            email: 'contato@hcode.com.br',
            id: 1
        }]
    });

});

routes.get('/admin', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        users: []
    });

});

module.exports = routes;