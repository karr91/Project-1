const mongoose = require('mongoose');

const connectionStr = 'mongodb://localhost:27017/PhotoExpress';

mongoose.connect(connectionStr, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  mongoose.connection.on('connected', () => {
    console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected`); 
  });
  
  mongoose.connection.on('error', (error) => {
    console.log('MongoDB connection error', error);
  });
  
  mongoose.connection.on('disconnected', () => console.log('MongoDB disconnected'));