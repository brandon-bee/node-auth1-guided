const router = require('express').Router()
const { add, findBy } = require('../users/users-model')
const bcrypt = require('bcryptjs')

const validatePayload = (req, res, next) => {
  next()
}

router.post('/register', validatePayload, async (req, res, next) => {
  try {
    const { username, password } = req.body
    const hash = bcrypt.hashSync(password, 8)
    const user = { username, password: hash }
    const createdUser = await add(user)
    res.status(201).json(createdUser)
  } catch (err) {
    next(err)
  }
})

router.post('/login', validatePayload, async (req, res, next) => {
  try {
    const { username, password } = req.body
    const [user] = await findBy({ username })
    if (user && bcrypt.compareSync(password, user.password)) {
      console.log(user)
      console.log(req.session)
      req.session.user = user
      res.json({ message: `welcome, ${username}, have a cookie`})
    } else {
      next()
    }
  } catch (err) {
    next(err)
  }
})

router.get('/logout', async (req, res, next) => {
  if (req.session.user) {
    req.session.destroy(err => {
      if (err) {
        res.json({ message: 'sorry, you cannot leave' })
      } else {
        res.json({ message: 'bye!' })
      }
    })
  } else {
    res.json({ message: 'I do not know you'})
  }
})

module.exports = router