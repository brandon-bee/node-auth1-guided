function restricted(req, res, next) {
  if (req.session.user) {
    next()
  } else {
    next({ status: 401, message: 'bad credentials!'})
  }
}

module.exports = {
  restricted
}