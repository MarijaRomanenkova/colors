const {Schema, model} = require('mongoose')

const schema = new Schema({
    id:  Number, 
    Pav: String,
    c1: String,
    p1: String,
    c2: String,
    p2: String,
    c3: String,
    p3: String,
    c4: String,
    p4: String,
    c5: String,
    p5: String    
  }, 
  { collection : 'colors_basic' });

 module.exports = model('Color', schema)