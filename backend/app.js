const express = require('express');
const path = require('path');
const helmet = require('helmet'); // sécurisation injection
require('dotenv').config();


//routes
const userRoutes = require('./routes/user');
const postsRoutes = require('./routes/posts');

//db
const { sequelize } = require('./models/index');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
// app.use(cors()); // CORS - partage de ressources entre serveurs
app.use(helmet()); // helmet

app.use('./upload', express.static(path.join(__dirname, './upload')));
app.use('/api/users', userRoutes);
app.use('/api/posts', postsRoutes);


const dbTest = async function () {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
dbTest();

module.exports = app;
