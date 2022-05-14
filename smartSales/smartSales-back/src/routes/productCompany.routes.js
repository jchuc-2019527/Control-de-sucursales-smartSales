'use strict'

const express = require('express');
const controllerProductCompany = require('../controllers/productCompany.controller');
const mdAuth = require('../services/authenticated');

const api = express.Router();

api.post('/addProductCompany', [mdAuth.ensureAuth1], controllerProductCompany.addProductCompany);
api.get('/getProducts', [mdAuth.ensureAuth1], controllerProductCompany.getProducts);
api.put('/updateProduct/:id', [mdAuth.ensureAuth1], controllerProductCompany.updateProduct);
api.delete('/deleteProduct/:id', [mdAuth.ensureAuth1], controllerProductCompany.deleteProduct);
module.exports = api;