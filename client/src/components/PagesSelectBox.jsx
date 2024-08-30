import React, { useState, useEffect } from 'react';
import { fetchUserPages } from '../helpers/api';

const PagesSelectBox = ({ accessToken, onSelectPage }) => {
    const [pages, setPages] = useState([]);

    useEffect(() => {
        const getPages = async () => {
            const res = await fetchUserPages(accessToken);
            setPages(res.data);
        };
        getPages();
    }, [accessToken]);

    return (
        <select onChange={(e) => onSelectPage(e.target.value)}>
            <option value="">Select a Page</option>
            {pages.map(page => (
                <option key={page.id} value={page.id}>{page.name}</option>
            ))}
        </select>
    );
};

export default PagesSelectBox;
