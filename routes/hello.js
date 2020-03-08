var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/:message', function (req, res, next) {
  const { params } = req
  res.json({ message: 'Hello Kob obob!!', params })
})

module.exports = router
