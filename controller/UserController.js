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
  addUser (user) {
    user.id = this.lastId++
    this.userList.push(user)
    return user
  },
  updateUser (user) {
    const index = this.userList.findIndex(item => item.id === user.id)
    this.userList.splice(index, 1, user)
    return user
  },
  deleteUser (id) {
    const index = this.userList.findIndex(item => item.id === parseInt(id))
    this.userList.splice(index, 1)
    return { id }
  },
  getUsers () {
    return [...this.userList]
  },
  getUser (id) {
    const index = this.userList.find(user => user.id === parseInt(id))
    return index
  }
}

module.exports = userController
