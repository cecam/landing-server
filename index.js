const mongoose = require('mongoose');
require("dotenv").config();

const app = require('./app');

const port = process.env.PORT || 8080;

mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/` 
)
    .then(() => {
        app.listen(port,  () => {
            console.log('##################');
            console.log('#### API REST ####');
            console.log('##################');

            console.log(`http:${process.env.IP_SERVER}:${port}/api`);
        })
    })
    .catch(e => console.log(e))