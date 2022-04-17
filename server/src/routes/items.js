const router = require('express').Router();
const { searchItems, getItem } = require('../controllers/items.controller');

router.route('/').get(searchItems);
router.route('/:id').get(getItem);

module.exports = router;
