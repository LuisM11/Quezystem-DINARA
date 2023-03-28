
import { useMutation } from '@tanstack/react-query';
import { authenticate } from '../api/loginApi'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useGlobalContext } from '../context/GlobalContext';

export const useLogin = () => {
    const {setloggedUser} = useGlobalContext();
    const navigate = useNavigate();
    const login = useMutation({
        mutationFn: authenticate,
        onSuccess: (data) => {
            const user = structuredClone(data.data)
            delete user.state
            delete user.message
            /* Cookies.set('token', user.token, { expires: 1 , sameSite:'Strict' ,secure: true, httpOnly: true }); */
            /* delete user.token */
            localStorage.setItem('user', JSON.stringify(user));
            setloggedUser(user);
            navigate('/dashboard');
            /* queryClient.invalidateQueries("products"); */
        },
        onError: (error) => {
        }
    });
    return login;
}


