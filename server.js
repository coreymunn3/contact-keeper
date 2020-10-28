const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// connect database
connectDB();

// init middleware
app.use(express.json({ extended: false })); // allows us to accept body data

// Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

// serve static assets for prod
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));
  // load index.html inside client build
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
