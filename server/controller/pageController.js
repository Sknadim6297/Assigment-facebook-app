const axios = require('axios');

// Fetch user pages
const getUserPages = async (req, res) => {
    const { accessToken } = req.query;

    try {
        const response = await axios.get(`https://graph.facebook.com/me/accounts`, {
            params: { access_token: accessToken }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Fetch page insights
const getPageInsights = async (req, res) => {
    const { pageId, accessToken, since, until } = req.query;

    try {
        const response = await axios.get(`https://graph.facebook.com/${pageId}/insights`, {
            params: {
                metric: 'page_impressions,page_engaged_users,page_reactions_by_type_total',
                period: 'total_over_range',
                since,
                until,
                access_token: accessToken
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getUserPages, getPageInsights };
