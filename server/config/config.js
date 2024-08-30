const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
    FACEBOOK_APP_SECRET: process.env.FACEBOOK_APP_SECRET,
    CALLBACK_URL: 'https://f3a2-2409-40e1-301c-86ad-8110-2b74-47b6-abc.ngrok-free.app/auth/facebook/callback'
};
