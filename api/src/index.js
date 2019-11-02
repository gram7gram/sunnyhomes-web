const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const cors = require('cors')

const LoginController = require('./server/controllers/LoginController');
const OwnerRESTController = require('./server/controllers/OwnerRESTController');
const AdminRESTController = require('./server/controllers/AdminRESTController');
const ProfileController = require('./server/controllers/ProfileController');
const SmoobuController = require('./server/controllers/SmoobuController');

const app = express();

app.use(cors());
app.use(bodyParser.json());

//Public API
app.use('/api/v1', LoginController);

app.use('/api/v1', ProfileController);

//Admin API
app.use('/api/v1', OwnerRESTController);
app.use('/api/v1', AdminRESTController);

//Owner API
app.use('/api/v1', SmoobuController);

app.use(express.static(path.resolve(__dirname, '../public')))

app.all('*', (req, res) => {
  res.status(404).json({
    message: 'No route found'
  })
});

module.exports = app
