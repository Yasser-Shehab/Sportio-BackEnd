const express = require ('express')
const { getAllCategories, getSingleCategory, addCategory, updateCategory, deleteCategory } = require('../controllers/category.controller')
const router = express.Router()

router.get('/',getAllCategories)
router.get('/:id',getSingleCategory)
router.post('/',addCategory)
router.patch('/:id',updateCategory)
router.delete('/:id',deleteCategory)

module.exports = router