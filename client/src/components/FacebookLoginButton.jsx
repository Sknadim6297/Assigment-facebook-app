import React from 'react';
import FacebookLogin from 'react-facebook-login';

const FacebookLoginButton = ({ onSuccess }) => {
    const responseFacebook = async (response) => {
        if (response.accessToken) {
            try {
                const res = await fetch(`https://f3a2-2409-40e1-301c-86ad-8110-2b74-47b6-abc.ngrok-free.app/auth/facebook/callback?code=${response.accessToken}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    mode: 'cors', // Set to cors mode
                    credentials: 'include', // Include credentials if needed
                });
    
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                onSuccess(data.access_token);
            } catch (error) {
                console.error('Error during fetch:', error);
            }
        }
    };

    return (
        <FacebookLogin
            appId="1134274717671083"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
        />
    );
};

export default FacebookLoginButton;
