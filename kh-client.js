
const axios = require('axios')

exports.ReportSuccess = async () => {
    let report = newReport([]);
    try {
        await sendReport(report);
    } catch (err) {
        let reportErr = new Error("failed to send report: " + err.message);
        throw reportErr;
    }
}

exports.ReportFailure = async (errorMessages) => {

    let report = newReport(errorMessages);

    try {
        await sendReport(report);
    } catch (err) {
        let reportErr = new Error("failed to send report: " + err.message);
        throw reportErr;
    }
}

async function sendReport(statusReport) {
    let data;
    try {
        data = JSON.stringify(statusReport);
    } catch (err) {
        let jsonErr = new Error("failed to convert status report to json string: " + err.message);
        throw jsonErr;
    }

    await axios({
      method: 'post',
      url: process.env.KH_REPORTING_URL,
      data: data,
      headers: {
        "Content-Type": "application/json",
      }
    })
}


function newReport(errorMessages) {
    let ok = false;
    if (errorMessages.length == 0) {
        ok = true;
    }
    return {
        Errors: errorMessages,
        OK: ok,
    };
}
