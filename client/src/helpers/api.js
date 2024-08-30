const API_URL = 'http://localhost:5000/api';

export const fetchUserPages = async (accessToken) => {
    const response = await fetch(`${API_URL}/pages?accessToken=${accessToken}`);
    return response.json();
};

export const fetchPageInsights = async (pageId, accessToken, since, until) => {
    const response = await fetch(`${API_URL}/page/insights?pageId=${pageId}&accessToken=${accessToken}&since=${since}&until=${until}`);
    return response.json();
};
