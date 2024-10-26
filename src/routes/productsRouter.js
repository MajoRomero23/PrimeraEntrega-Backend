const express = require('express');
const { getProducts, getProductsById, addProduct, deleteProduct, updateProduct } = require('../controllers/productsController');
const router = express.Router();

router.get('/', getProducts);
router.post('/', addProduct);
router.put('/:pid',updateProduct);
router.delete('/:pid', deleteProduct);
router.get('/:pid', getProductsById);


module.exports=router;
