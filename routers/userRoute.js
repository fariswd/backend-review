const router = require('express').Router();
const userController = require('../controllers/userController')

router.get('/v', userController.welcomePage)
router.post('/', userController.addUser)
router.get('/', userController.getUsers)
router.get('/:id', userController.getUser)
router.put('/:id', userController.editUser)
router.delete('/:id', userController.deleteUser)

module.exports = router;
