# seneca-firebase-counter
Seneca counter for firebase

Work in progress

## Usage

```javascript
'use strict'

const Seneca = require('seneca')()
const senecaFirebaseAdd = require('seneca-firebase-add')
const senecaFirebaseAddOptions = {
  tag: 'doTheCongas'
}

Seneca.use(senecaFirebaseAdd, senecaFirebaseAddOptions)

Seneca.listen(1337)

```
