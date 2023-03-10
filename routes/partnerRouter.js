const express = require('express');
const partnerRouter = express.Router();

partnerRouter
    .route('/partners')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send all the partners to you');
    })
    .post((req, res) => {
        res.end(
            `Will add the partner: ${req.body.name} with description: ${req.body.description}`
        );
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /campsites');
    })
    .delete((req, res) => {
        res.end('Deleting all partners');
    });

partnerRouter
    .route('/partners/:partnerId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`Getting info on ${req.params.partnerId}`);
    })
    .post((req, res) => {
        res.end(`POST operation not supported on ${req.params.partnerId}`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end(
            `Updating the partner: ${req.params.partnerId}. Will update the partner: ${req.body.name} with description: ${req.body.description}`
        );
    })
    .delete((req, res) => {
        res.end(`Deleting partner: ${req.params.partnerId}`);
    });

module.exports = partnerRouter;
