const router = require('express').Router();
const planeController = require('../controllers/planeController')

router.get('/v', planeController.welcomePage)
router.post('/', planeController.addPlane)
router.get('/', planeController.getPlanes)
router.get('/:id', planeController.getPlane)
router.put('/:id', planeController.editPlane)
router.delete('/:id', planeController.deletePlane)

module.exports = router;
