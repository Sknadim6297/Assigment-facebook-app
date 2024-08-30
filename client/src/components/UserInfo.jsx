import React from 'react';

const UserInfo = ({ user }) => (
    <div>
        <h1>Welcome {user.name}</h1>
        <img src={user.picture.data.url} alt={user.name} />
    </div>
);

export default UserInfo;
