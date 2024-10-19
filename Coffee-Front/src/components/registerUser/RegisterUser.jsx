import React, { useState } from 'react'
import './RegisterUser.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Sucess from '../alerts/Sucess'
import Erro from '../alerts/Erro'
import soon from '../../imgs/coffee.png';
import user from '../../imgs/useer.png'
import { LuPlus } from "react-icons/lu";
import Confirm from '../alerts/Confirm'

const RegisterUser = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        profileImage: null
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleImageChange = (e) => {
        setFormData({ ...formData, profileImage: e.target.files[0] })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        Confirm.register().then(async (result) =>{
            if(result.isConfirmed){
                if (formData.password !== formData.confirmPassword) {
                    Erro.erro('Passwords do not match.');
                    return;
                }
        
                const formDataSubmit = new FormData();
                formDataSubmit.append('username', formData.username);
                formDataSubmit.append('email', formData.email);
                formDataSubmit.append('password', formData.password);
                formDataSubmit.append('profile_image', formData.profileImage);
        
                try {
                    const response = await axios.post('http://127.0.0.1:8000/user/create/', formDataSubmit, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    });
                    if (response.status === 201) {
                        Sucess.register().then(async (result) => {
                            if (result.isConfirmed) {
                                navigate(-1)
                            }
                        })
                    }
        
                } catch (error) {
                    if (error.response) {
        
                        Erro.erro(Object.values(error.response.data).join('\n'));
                    } else {
                        console.error('Erro na requisição:', error.message);
                        Erro.erro('Unknown error');
                    }
                }
            }
        })
    };
    const handleAddImageClick = () => {
        document.getElementById('profileImageInput').click();
    };

    const cancel = () =>{
        Confirm.cancel().then(async (result) => {
            if(result.isConfirmed){
                navigate(-1)
            }
        })
    }

    return (
        <main className='registerUser'>
            <section className='logoRegister'>
                <img src={soon} alt="soon coffee" />
            </section>
            <section className="register">
                <h1><span>Re</span>g<span>ister</span></h1>
                <form onSubmit={handleSubmit} className='formRegisterUser' encType="multipart/form-data">

                    <div className="photoProfile">
                        <div className='searchImage' onClick={handleAddImageClick}>
                            <img src={formData.profileImage ? URL.createObjectURL(formData.profileImage) : user} alt='user' />
                            <i>
                                <LuPlus className='addImageIcon' />
                            </i>
                            <input
                                type='file'
                                id='profileImageInput'
                                style={{ display: 'none' }}
                                onChange={handleImageChange}
                                accept='image/*'
                                required
                            />
                        </div>
                        <div className="notes">
                            <h2>Upload a profile photo</h2>
                            <p>Accepted file types: .jpg, .jpeg, .png, .GIF</p>
                            <p>Note: burst and live images will be converted to a still image.</p>
                            <p>For best results, upload a square image at least 160px by 160px.</p>
                        </div>
                    </div>

                    <label>
                        Email<input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required />
                    </label>
                    <label>
                        Username<input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required />
                    </label>
                    <label>
                        Password (Minimum 8 characters, including uppercase letters, lowercase letters, numbers and special characters)<input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required />
                    </label>
                    <label>
                        Confirm Password<input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange} id="" required />
                    </label>
                    <div className="buttons">
                        <button type='button' onClick={() => cancel()}>Cancel</button>
                        <button type="submit">Register</button>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default RegisterUser
