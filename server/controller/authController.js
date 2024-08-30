const axios = require('axios');
const { FACEBOOK_APP_ID, FACEBOOK_APP_SECRET, CALLBACK_URL } = require('../config/config');

// Facebook OAuth redirect endpoint
const facebookAuth = (req, res) => {
    const redirectUri = `https://www.facebook.com/v12.0/dialog/oauth?client_id=${FACEBOOK_APP_ID}&redirect_uri=${CALLBACK_URL}&state=some_state_value`;
    res.redirect(redirectUri);
};

// Facebook OAuth callback endpoint
const facebookCallback = async (req, res) => {
    const { code } = req.query;

    if (code) {
        try {
            const response = await axios.get(`https://graph.facebook.com/v12.0/oauth/access_token`, {
                params: {
                    client_id: FACEBOOK_APP_ID,
                    redirect_uri: CALLBACK_URL,
                    client_secret: FACEBOOK_APP_SECRET,
                    code
                }
            });
            const { access_token } = response.data;
            res.json({ access_token });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.status(400).json({ error: 'No code provided' });
    }
};

// Fetch user info
const getUserInfo = async (req, res) => {
    const { accessToken } = req.query;

    try {
        const response = await axios.get(`https://graph.facebook.com/me`, {
            params: {
                access_token: accessToken,
                fields: 'id,name,email,picture'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { facebookAuth, facebookCallback, getUserInfo };
