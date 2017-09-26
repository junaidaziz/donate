// Built-in Modules
const express = require('express');
const path = require('path');
const app = express();

app.use('/', (req, res) => {
  res.send({
    status: true,
    message: "First Message"
  })
})
// To Start Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Node server listening on ', port);
});
