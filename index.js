'use strict'

module.exports = options => {
  const seneca = this

  seneca.add('role:firebase,cmd:add', (msg, callback) => {
    return callback(null, msg)
  })
}
