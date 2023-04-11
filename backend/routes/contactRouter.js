const express = require('express');
const contactRouter = express.Router();
const Contact = require('../models/contact');

contactRouter.route('/')
    .get((req, res, next) => {
        Contact.find()
            .then(data => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(data)
            })
            .catch(err => next(err));
    })

    .post((req, res, next) => {
        Contact.create(req.body)
            .then(data => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(data)
            })
            .catch(err => next(err));
    })
    .put((req, res, next) => {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'text/plain');
        res.end('PUT method is not supported on /contact');
    })
    .delete((req, res, next) => {
        Contact.deleteMany()
            .then(response => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(response);
            })
            .catch(err => next(err));
    });

module.exports = contactRouter;