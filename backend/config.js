module.exports = {
    MONGODB_URI:'mongodb://localhost:27017/Ai',
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY || 'YOUR_API_KEY_HERE',
    JWT_SECRET: process.env.JWT_SECRET || 'secret'
  };
  