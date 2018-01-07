const router = require('express').Router();
const rocketController = require('../controllers/rocketController')

router.get('/v', rocketController.welcomePage)
router.post('/', rocketController.addRocket)
router.get('/', rocketController.getRockets)
router.get('/:id', rocketController.getRocket)
router.put('/:id', rocketController.editRocket)
router.delete('/:id', rocketController.deleteRocket)

module.exports = router;
