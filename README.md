## kuberhealthy-client 🩺 
[![npm version](https://badge.fury.io/js/kuberhealthy.svg)](https://badge.fury.io/js/kuberhealthy)

a simple, asynchronous javascript client for [kuberhealthy](https://github.com/Comcast/kuberhealthy) synthetic checks. 

#### install

```
npm i --save kuberhealthy
```

#### use:

```javascript
const kh = require('kuberhealthy')

// Report failure. Returns Promise.
kh.ReportFailure(['example failure message'])

// Report success. Returns Promise.
kh.ReportSuccess()

```

> _NOTE: KH_REPORTING_URL must be set in your env. This is usually done automatically if running as 'khcheck' on kubernetes._ 

#### example: 
```javascript
const report = async () => {
  try {
    await kh.ReportSuccess()
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
  process.exit(0)
}

report()
```
---

#### credit:

- this client was inspired and based from [kuberhealthy client js](https://github.com/Comcast/kuberhealthy/blob/master/clients/js/README.md)







