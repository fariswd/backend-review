const router = require('express').Router();
const spaceshipController = require('../controllers/spaceshipController')

router.get('/v', spaceshipController.welcomePage)
router.post('/', spaceshipController.addSpaceship)
router.get('/', spaceshipController.getSpaceships)
router.get('/:id', spaceshipController.getSpaceship)
router.put('/:id', spaceshipController.editSpaceship)
router.delete('/:id', spaceshipController.deleteSpaceship)

module.exports = router;
