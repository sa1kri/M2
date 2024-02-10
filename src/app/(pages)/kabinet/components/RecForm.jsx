import React, {useRef} from "react";
import { Toaster  } from "sonner";

export const RecForm = () => { 
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
                
                <input  type="password"
                placeholder="Секрет слово"
                defaultValue={''}
                ref={inputPassword}></input>

            <button type="submit">востоновить</button>
        </form>  
        
        <Toaster
        position="bottom-center"
        expand={false}
        richColors
     />
    </>
    );
}