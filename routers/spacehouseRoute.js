const router = require('express').Router();
const spacehouseController = require('../controllers/spacehouseController')

router.get('/v', spacehouseController.welcomePage)
router.post('/', spacehouseController.addSpacehouse)
router.get('/', spacehouseController.getSpacehouses)
router.get('/:id', spacehouseController.getSpacehouse)
router.put('/:id', spacehouseController.editSpacehouse)
router.delete('/:id', spacehouseController.deleteSpacehouse)

module.exports = router;
