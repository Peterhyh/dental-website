const express = require('express');
const appointmentRouter = express.Router();
const Appointment = require('../models/appointment');

appointmentRouter.route('/')
    .get((req, res, next) => {
        Appointment.find()
            .then(data => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(data);
            })
            .catch(err => next(err));
    })
    .post((req, res, next) => {
        Appointment.create(req.body)
            .then(data => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(data);
            })
            .catch(err => next(err));
    })
    .put((req, res, next) => {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'text/plain');
        res.end('PUT method is not supported on /appointment');
    })
    .delete((req, res, next) => {
        Appointment.deleteMany()
            .then(response => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(response);
            })
            .catch(err => next(err));
    });

module.exports = appointmentRouter;