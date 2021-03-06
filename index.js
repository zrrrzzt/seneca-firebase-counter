'use strict'

module.exports = function firebaseCounter (options) {
  const firebase = require('firebase')
  const app = firebase.initializeApp({
    apiKey: options.apiKey,
    authDomain: options.authDomain,
    databaseURL: options.databaseURL,
    storageBucket: options.storageBucket
  })
  const database = firebase.database()
  const seneca = this

  seneca.add('role:counter,cmd:add', (args, done) => {
    const value = parseInt(args.value || 1, 10)
    const valueRef = database.ref(args.key || 'value')
    valueRef.transaction((currentVal) => {
      return currentVal + value
    })
    done(null, {success: true, value: value})
  })

  seneca.add('role:counter,cmd:sub', (args, done) => {
    const value = parseInt(args.value || 1, 10)
    const valueRef = database.ref(args.key || 'value')
    valueRef.transaction((currentVal) => {
      return currentVal - value
    })
    done(null, {success: true, value: value})
  })

  return options.tag || 'seneca-firebase-counter'
}
