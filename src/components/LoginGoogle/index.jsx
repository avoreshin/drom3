import React from "react";

import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode"
import { Image, Button } from "semantic-ui-react";
import { Space } from "antd";


const LoginGoogle = () => {

    const [user, setUser] = useState({});

    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
        let userObject = jwt_decode(response.credential);
        console.log(userObject);
        setUser(userObject);

        //если пользователь уже залогинился, кнопка логина исчезает
        document.getElementById("signInDiv").hidden = true;
    }

    function handleSignOut(event) {
        //функция для выхода
        setUser({});
        document.getElementById("signInDiv").hidden = false;
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "534749363099-5dcbemths79oav1bj8tlue8euq2hfmeh.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(document.getElementById("signInDiv"), { theme: "outline", size: "large" });

        google.accounts.id.prompt();
    }, [])

    return (<Space size={10}>
        <div id="signInDiv" />
        {Object.keys(user).length !== 0 &&
            <>
                <Image circular src={user.picture} />
                {user.name}
            </>
        }

        {//если у пользователя нет аттрибутов, то он разлогинен
            Object.keys(user).length !== 0 && <Button color={"red"} onClick={(e) => handleSignOut(e)}>Выйти</Button>}

    </Space>);
}


export default LoginGoogle;