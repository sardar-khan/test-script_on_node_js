// Run a Streamr node right inside your JS app
const StreamrClient = require("streamr-client");
const streamr = new StreamrClient({
  auth: {
    privateKey: "PUT_YOUR_PRIVATE_KEY_HERE",
  },
});

// Or subscribe to a stream of messages
streamr.subscribe(
  "0xe5ac5a490aa8efeaf0e3ddcb494eb8c513016430/first-stream",
  (msg) => {
    // Handle incoming messages
    console.log(msg);
  }
);
