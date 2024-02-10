import React, {useRef} from "react";
import { Toaster  } from "sonner";

export const RegForm = () => { 
    const inputLogin = useRef(null);
    const inputPassword = useRef(null);
    const changeLogin = (e) => {
        e.prevenDefault();

        const login = inputLogin.current.Value
        const password = inputPassword.current.value
        console.log(login, password)

        axios.post('/api/login', {login, password}, {
            withCredentials: false,
        }).then(() => {
            toast.success('Авторизация удалась')
        })
        .catch(() => {
            toast.error('Авторизация не удалась')
        })
    }
    
    return (
          <>
              <form onSubmit={e => changeLogin(e)}>
                <input
                ref={inputLogin}
                type="text"
                placeholder="Логин"
                defaultValue={''} />
                
                <input  type="text"
                placeholder="Пароль"
                defaultValue={''}
                ref={inputPassword}></input>

                <input  type="password"
                placeholder="Пароль"
                defaultValue={''}
                ref={inputPassword}></input>

            <button type="submit">регистрация</button>
        </form>  
        
        <Toaster
        position="bottom-center"
        expand={false}
        richColors
     />
    </>
    );
}