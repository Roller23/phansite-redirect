
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.all('*', function(req, res) {
  res.redirect(301, 'https://phansite-archives.glitch.me/');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
