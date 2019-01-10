const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.get('/api/products', controller.getProducts);
router.get('/api/baner', controller.getBanner);
router.get('/api/promotions', controller.getPromotions);
router.get('*', controller.notFound);

module.exports = router;
