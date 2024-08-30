import React, { useEffect, useState } from 'react';
import FacebookLoginButton from './components/FacebookLoginButton';
import UserInfo from './components/UserInfo';
import PagesSelectBox from './components/PagesSelectBox';
import PageInsights from './components/PageInsights';

const App = () => {
  useEffect(() => {
    window.fbAsyncInit = function() {
        FB.init({
            appId      : '1134274717671083',  // Replace with your actual Facebook App ID
            cookie     : true,
            xfbml      : true,
            version    : 'v12.0'
        });
    };

    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
}, []);
    const [accessToken, setAccessToken] = useState(null);
    const [user, setUser] = useState(null);
    const [selectedPage, setSelectedPage] = useState(null);

    const handleLoginSuccess = async (token) => {
        setAccessToken(token);
        const res = await fetch(`http://localhost:5000/user?accessToken=${token}`);
        const userData = await res.json();
        setUser(userData);
    };

    const handlePageSelect = (pageId) => {
        setSelectedPage(pageId);
    };

    return (
        <div className="App">
            {!accessToken ? (
                <FacebookLoginButton onSuccess={handleLoginSuccess} />
            ) : (
                <div>
                    {user && <UserInfo user={user} />}
                    <PagesSelectBox accessToken={accessToken} onSelectPage={handlePageSelect} />
                    {selectedPage && <PageInsights pageId={selectedPage} accessToken={accessToken} />}
                </div>
            )}
        </div>
    );
};

export default App;
