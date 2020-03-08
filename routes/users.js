const express = require('express')
const router = express.Router()
const userController = require('../controller/UserController')
const User = require('../models/User')
/* GET users listing. */
router.get('/', userController.getUsers)
router.get('/:id', userController.getUser)
router.post('/', userController.addUser)
router.put('/', userController.updateUser)
router.delete('/:id',userController.deleteUser)

module.exports = router
