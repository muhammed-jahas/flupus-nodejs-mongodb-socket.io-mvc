const mongoose = require('mongoose');

function connectToDatabase() {
  mongoose.connect('mongodb+srv://propertify:propertify123@cluster0.kv0sqpa.mongodb.net/flupus', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });

  db.once('open', () => {
    console.log('Connected to MongoDB');
  });
}

module.exports = connectToDatabase;
