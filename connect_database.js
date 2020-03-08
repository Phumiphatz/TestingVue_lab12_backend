const mongoose = require('mongoose')
const User = require('./models/User')
mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true })

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', () => {
  console.log('connect')
})
// const userSchema = new mongoose.Schema({
//   name: String,
//   gender: String
// })
// const User = mongoose.model('User', userSchema)

// const kittySchema = new mongoose.Schema({
//   name: String
// })

// kittySchema.methods.speak = function () {
//   var greeting = this.name ? 'Meow name is ' + this.name : "I don't have a name"
//   console.log(greeting)
// }

// const Kitten = mongoose.model('Kitten', kittySchema)
// const silence = new Kitten({ name: 'Silence' })
// console.log(silence.name) // 'Silence'

// var fluffy = new Kitten({ name: 'fluffy' })
// fluffy.speak()
// fluffy.save(function (err, fluffy) {
//   if (err) return console.error(err)
//   fluffy.speak()
// })

// Kitten.find(function (err, kittens) {
//   if (err) return console.error(err)
//   console.log(kittens)
// })

// Kitten.find({ name: /^fluff/ }, callback)

User.find(err, users => {
  if (err) return console.log(err)
  console.log(users)
})
