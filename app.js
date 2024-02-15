const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');

app = express();
server = http.createServer(app);

app.use(cors()); // Enable CORS for all routes

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Express route handling
app.post('/', (req, res) => {
    data = {
        "src": "server",
        "type": "value",
        "value": "recieved"
    }
    res.send(data);

    console.log(req.body);
});
    
// Start the server
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});