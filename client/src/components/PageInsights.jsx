import React, { useState, useEffect } from 'react';
import { fetchPageInsights } from '../helpers/api';

const PageInsights = ({ pageId, accessToken }) => {
    const [insights, setInsights] = useState(null);

    useEffect(() => {
        const getInsights = async () => {
            const since = '2023-01-01'; // Example date
            const until = '2023-12-31'; // Example date
            const res = await fetchPageInsights(pageId, accessToken, since, until);
            setInsights(res.data);
        };
        getInsights();
    }, [pageId, accessToken]);

    if (!insights) return null;

    const { data } = insights;
    const impressions = data.find(metric => metric.name === 'page_impressions');
    const engagement = data.find(metric => metric.name === 'page_engaged_users');
    const reactions = data.find(metric => metric.name === 'page_reactions_by_type_total');

    return (
        <div>
            <h2>Page Insights</h2>
            <div>Total Followers: {impressions ? impressions.values[0].value : 'N/A'}</div>
            <div>Total Engagement: {engagement ? engagement.values[0].value : 'N/A'}</div>
            <div>Total Impressions: {impressions ? impressions.values[0].value : 'N/A'}</div>
            <div>Total Reactions: {reactions ? reactions.values[0].value : 'N/A'}</div>
        </div>
    );
};

export default PageInsights;
