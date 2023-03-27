// Run a Streamr node right inside your JS app
const StreamrClient = require("streamr-client");
const streamr = new StreamrClient({
  auth: {
    privateKey: "PUT_YOUR_PRIVATE_KEY_HERE",
  },
});

// Publish messages to a stream
streamr.publish("0xe5ac5a490aa8efeaf0e3ddcb494eb8c513016430/first-stream", {
  name: "Aun Shahbaz Awan",
  message: "QWERTYUIOP ASDFGHJK",
  date: new Date(),
});

console.log("Message Send!");
