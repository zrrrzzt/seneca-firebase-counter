'use strict'

module.exports = function firebaseCounter (options) {
  const seneca = this

  seneca.add('role:firebase,cmd:add', (args, done) => {
    done(null, {success: true})
  })

  return options.tag || 'seneca-firebase-counter'
}
