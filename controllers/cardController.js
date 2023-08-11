const Card = require('../models/Card')

const getAllCards = async (req, res) => {
    try {
        const cards = await Card.findAll();
        res.status(200).json(cards)

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
const createOneCard = async (req, res) => {
    try {
        const newCard = await Card.create(req.body)
        res.status(201).json(newCard)
    
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}
const updateOneCard = async (req, res) => {
    // res.send(req.params.id)
    try{
        const id=req.params.id
        const card = await Card.findOne({ where: { card_id: id } });
        card.set(req.body);
        await card.save();
        res.status(200).json(card)

    }catch(err){
        res.status(400).json({ message: err.message })
    }
}

const deleteOneCard = async (req, res) => {
    try{
        const id=req.params.id
        const card = await Card.findOne({ where: { card_id: id } });
        await card.destroy();
        res.status(200).json(card)
    }catch(err){
        res.status(400).json({ message: err.message })
    }
}
module.exports = {getAllCards, createOneCard, updateOneCard, deleteOneCard}