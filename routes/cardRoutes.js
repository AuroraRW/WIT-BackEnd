const express = require('express')
const router = express.Router()
const Card = require('../models/Card')
const {getAllCards, createOneCard, updateOneCard, deleteOneCard} = require('../controllers/cardController')

router.get('/cards', getAllCards)

router.post('/cards', createOneCard)

router.put('/cards/:id', updateOneCard)

router.delete('/cards/:id', deleteOneCard)


module.exports = router