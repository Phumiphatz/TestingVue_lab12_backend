const express = require('express')
const router = express.Router()
const userController = require('../controller/UserController')
/* GET users listing. */
router.get('/', (req, res, next) => {
  res.json(userController.getUsers())
})
router.get('/:id', (req, res, next) => {
  const { id } = req.params
  res.json(userController.getUser(id))
})
router.post('/', (req, res, next) => {
  const payload = req.body
  res.json(userController.addUser(payload))
})

router.put('/', (req, res, next) => {
  const payload = req.body
  res.json(userController.updateUser(payload))
})

router.delete('/', (req, res, next) => {
  const { id } = req.params
  res.json(userController.de(id))
})

module.exports = router
