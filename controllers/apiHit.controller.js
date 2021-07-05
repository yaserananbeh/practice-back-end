const axios = require('axios');
require('dotenv').config();
const apiUrl = process.env.API_URL;

const ApiHit = (req, res) => {
    axios.get(`${apiUrl}`).then(response => {
        res.send(response.data)
    }).catch(error => res.send(error.message))
    // res.send("hi")
}
module.exports = ApiHit