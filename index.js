const express = require('express');

const app = express();
app.use(express.static("public"));
app.get('/', function(req, res) {
    res.redirect('/colorGame.html');
});

app.listen(process.env.PORT || 3000, process.env.IP, function () {
    console.log('Listening...');
});
