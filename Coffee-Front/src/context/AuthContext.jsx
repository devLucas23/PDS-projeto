import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

function AuthContextProvider(props) {
    const [user, setUserState] = useState(JSON.parse(localStorage.getItem('user')) || null);
    const [token, setTokenState] = useState(localStorage.getItem('token') || '');
    const [profileImage, setProfileImage] = useState(localStorage.getItem('profileImage') || null); // Estado para a imagem de perfil

    const setToken = (newToken, newUser, profileImageUrl) => {
        axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
        localStorage.setItem('token', newToken);
        setTokenState(newToken);
        localStorage.setItem('user', JSON.stringify(newUser));
        setUserState(newUser);
        localStorage.setItem('profileImage', profileImageUrl); // Salva a URL da imagem de perfil no localStorage
        setProfileImage(profileImageUrl); // Atualiza a URL da imagem de perfil no estado
    };

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
    }, [token]);

    return (
        <AuthContext.Provider value={{ user, setUser: setUserState, token, setToken, profileImage }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
