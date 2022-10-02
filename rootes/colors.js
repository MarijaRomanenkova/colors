const {Router} = require('express')

const { createColor,
        getAllColors,
        getColor,
        deleteColor,
        updateColor
 } = require('../controllers/colorsController')
const router = Router()


// Get all colors

router.get('/', getAllColors) 

// Get one color
router.get('/:id', getColor)     
// Add one color
router.post('/', createColor) 
// Delete one color
router.delete('/:id', deleteColor)    
// Update one color
router.patch('/:id', updateColor)  



router.get('*', (req, res) => {
    res.status(404).json({ error: "not found" })
})

module.exports = router