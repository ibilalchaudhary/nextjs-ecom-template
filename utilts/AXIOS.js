const axios = require("axios");
const http = require("http");
const https = require("https");

export default axios.create({
  //60 sec timeout
  timeout: 60000,
  //keepAlive pools and reuses TCP connections, so it's faster
  httpAgent: new http.Agent({ keepAlive: false }),
  httpsAgent: new https.Agent({ keepAlive: false }),
  //follow up to 10 HTTP 3xx redirects
  maxRedirects: 10,
  //cap the maximum content length we'll accept to 10MBs, just in case
  maxContentLength: 10 * 1000 * 1000,
  //withCredentials: true,
});
