const express = require('express');
const path = require('path');

const app = express();
const port = "8080";
app.use("/public", express.static(__dirname + "/../../public/js"));

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '/template.html'));
});