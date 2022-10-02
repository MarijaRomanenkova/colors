const Colors = require('../models/colors.model.js')
const mongoose = require('mongoose')

// get all colors
const getAllColors = async (req, res) => {
    const colors = await Colors.find({ }).lean().limit(10)
    res.status(200).json(colors)    
}

// get one color
const getColor = async (req, res) => {
    const {id} = req.params    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: 'No such color'})
    }
    
    const color = await Colors.findById(id)
    if(!color) {
        return res.status(404).json({error: 'No such color'})
    }
    res.status(200).json(color)
}

// create color
const createColor = async (req, res) => {
    const { Pav, c1, p1, c2, p2, c3, p3, c4, p4, c5, p5 }  = req.body
    try {
        const color = await Colors.create({ Pav, c1, p1, c2, p2, c3, p3, c4, p4, c5, p5 })
        res.status(200).json(color)
    } catch (error) {
        res.status(400).json({ error: error.message})
    } 
}

// delete color
const deleteColor = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: 'No such color'})
    }

    const color = await Colors.findOneAndDelete({_id:id})
    if(!color) {
        return res.status(404).json({error: 'No such color'})
    }

    res.status(200).json(color)
}

// update color
const updateColor = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: 'No such color'})
    }

    const color = await Colors.findOneAndUpdate({_id:id}, {
        ...req.body
    })
    if(!color) {
        return res.status(404).json({error: 'No such color'})
    }

    res.status(200).json(color)
}


module.exports = {
    createColor, getAllColors, getColor, deleteColor, updateColor
}