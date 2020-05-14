## kuberhealthy-client 🩺

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







