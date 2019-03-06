// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('database')
// const Promise = require("bluebird");
// const bodyParser = require('body-parser')

const express = require('express')
const app = express()
const port = 3000

app.use(express.static('dist'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))