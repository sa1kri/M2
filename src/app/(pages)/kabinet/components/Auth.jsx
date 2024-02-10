'use client'
import React, { useState } from "react";
import { LoginForm } from "./LoginForm";
import { RecForm } from "./RecForm";
import { RegForm } from "./RegForm";


export const Auth = () => {
    const[link, setLink] = useState('login');

    return (
        <>
            {link === 'log' && (
                <LoginForm/>
            )}
            {link === 'rec' && (
                <RecForm/>
            )}
            {link === 'reg' && (
                <RegForm/>
            )}
            

            <ul>
                <li><a onClick={() => setLink('log')}>Авторизация</a></li>
                <li><a onClick={() => setLink('rec')}>Восстановление</a></li>
                <li><a onClick={() => setLink('reg')}>Регистрация</a></li>
            </ul>
        </>
    );
}