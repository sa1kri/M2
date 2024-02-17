import React, { useRef } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";

export const RecForm = () => {
    const inputLogin = useRef(null);
    const inputPassword = useRef(null);

    const changeLogin = (e) => {
        e.preventDefault();
        
        const login = inputLogin.current.value;
        const password = inputPassword.current.value;
        console.log(login, password);

        axios.post("/api/login", { login, password }, {
            withCredentials: false,
        }).then(() => {
            toast.success('Авторизация удалась');
        }).catch(() => {
            toast.error('Авторизация не удалась');
        });
    }

    return (
        <>
            <form onSubmit={e => changeLogin(e)}>
                <input
                    ref={inputLogin}
                    type="text"
                    placeholder="Логин"
                    defaultValue={''}
                />
                <input
                    type="password"
                    placeholder="Секретное слово"
                    defaultValue={''}
                    ref={inputPassword}
                />
                <button type="submit">восстановить</button>
            </form>

            <Toaster
                position="bottom-center"
                expand={false}
                richColors
            />
        </>
    );
};