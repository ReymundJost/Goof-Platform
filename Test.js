// filename: app.js
const express = require('express');
const app = express();

app.get('/search', (req, res) => {
  const query = req.query.q;
  // VULNERABILITY: Directly echoing user input back to the response
  res.send('You searched for: ' + query);
});

app.listen(3000);
