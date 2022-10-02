const express = require('express')
const mongoose = require('mongoose')
const colorsRoutes = require('./rootes/colors.js')
const expbhs = require('express-handlebars')
const path= require('path')


const PORT = 5000

const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use(express.urlencoded({extended: true}))

// Welcome to our page
// app.use('/', async (req, res) => {
//     res.json({ message: 'Welcome'})      

// })

//routes
app.use('/colors', colorsRoutes)

//connect to DB
async function start() {
    try {
        await mongoose.connect(
            'mongodb+srv://marija:bagsnshoes@cluster0.nnnqibi.mongodb.net/colors_',  
            {
                useNewUrlParser: true
            }
        )              
        app.listen(PORT, () => {
            console.log('Server running')
        })
    } catch(e) {
        console.log(e)
    }
}             

        

start()


app.get('*', (req, res) => {
    res.status(404).json({ error: "not found" })
})