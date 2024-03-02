'use client'
import axios from "axios";
import React, {useRef} from "react";
import { Toaster, toast } from "sonner";

export const LoginForm = () => {
    const inputLogin = useRef(null);
    const inputPassword = useRef(null);

    const changeLogin = (e) => {
        e.preventDefault();

        const login = inputLogin.current.value
        const password = inputPassword.current.value
        console.log(login, password)

        axios.post('/api/login', {login, password}, {
            withCredentials: false,
        })
        .then(() => {
            toast.success('Авторизация пройдена')
        })
        .catch(() => {
            toast.error('Авторзация не удалась')
        })
    }

    return (
        <>
        <form onSubmit={e => changeLogin(e)}>
            <input 
            ref={inputLogin}
            type="text" 
            placeholder="логин"
             defaultValue={'admin'} />
            <input 
            ref={inputPassword}
            type="password" 
            placeholder="пароль"
            defaultValue={'default'} />
            <button type="submit">Войти</button>
        </form>
        <Toaster 
        position="bottom-center"
        expand={false}
        richColors
        />
        </>
    );
}