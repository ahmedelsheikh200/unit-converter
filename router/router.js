const express = require('express');
const router = express.Router();
const controller = require('../controller/controller')


router.get('/',controller.getLength)
router.get('/length',controller.getLength)
router.get('/weight',controller.getWeight)
router.get('/temprature',controller.getTemperature)
router.post('/length',controller.postLength)
router.post('/weight',controller.postWeight)
router.post('/temprature',controller.postTemperature)

module.exports= router