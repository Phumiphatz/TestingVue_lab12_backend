const User = require('../models/User')
const userController = {
  userList: [
    {
      id: 1,
      name: 'dome',
      gender: 'M'
    },
    {
      id: 2,
      name: 'phumiphat',
      gender: 'M'
    }
  ],
  lastId: 3,
  async addUser (req, res, next) {
    const payload = req.body
    const user = new User(payload)
    try {
      await user.save()
      res.json(user)
    } catch (err) {
      res.status(500).send(err)
    }
  },
  async updateUser (req, res, next) {
    const payload = req.body
    try {
      const user = await User.updateOne({ _id: payload._id }, payload)
      res.json(user)
    } catch (err) {
      res.status(500).send(err)
    }
  },
  async deleteUser (req, res, next) {
    try {
      const user = await User.updateOne({ _id: req.body._id }, payload)
      res.json(user)
    } catch (err) {
      res.status(500).send(err)
    }
  },
  async getUsers (req, res, next) {
    try {
      const users = await User.find({})
      res.json(users)
    } catch (err) {
      res.status(500).send(err)
    }
  },
  getUser (req, res, next) {
    const { id } = req.params
    User.findById(id)
      .then(user => {
        res.json(user)
      })
      .catch(error => {
        res.status(500).send(error)
      })
  }
}

module.exports = userController
