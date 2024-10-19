import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Login.scss';
import soon from '../../imgs/coffee.png';
import axios from 'axios';
import Erro from '../alerts/Erro';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setToken } = useContext(AuthContext)

    useEffect(() => {
        const clearLocalStorage = () => {
            localStorage.clear()

        }
        clearLocalStorage()
    }, [])
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/user/login/', {
                username: username,
                password,
            });

            if (response.status === 200) {
                setToken(response.data.token, response.data.user, response.data.profile_image_url);
                navigate('/feed');
            }
        } catch (error) {
            Erro.erro('Error logging in. Please try again later.');
            console.error('Error logging in:', error);
        }
    };

    return (
        <main id='login'>
            <section className="login" id="presentation">
                <h1>Coffee Recipes</h1>
                <div className="soon">
                    <img src={soon} alt="soon coffee" />
                    <p> Coffee, Recipes and Creativity in One Place!</p>
                </div>
            </section>
            <section className="login" id="form">
                <form onSubmit={handleSubmit} >
                    <h2>Login</h2>
                    <label>
                        Username<input type="text" value={username} onChange={e => setUsername(e.target.value)} className="information" />
                    </label>
                    <label>
                        Password<input type="password" value={password} onChange={e => setPassword(e.target.value)} className="information" />
                    </label>
                    <input type="submit" value="Enter" className="submit" />

                    <div>
                        <p className='description'>Don't have an account?<Link to={'/registerUser'} id='register'>Register</Link> </p>
                    </div>

                </form>

            </section>
        </main>
    );
}

export default Login;
