import React, { useContext, useState } from 'react';
import './RegisterRecipes.scss';
import Menu from '../menu/Menu';
import Confirm from '../alerts/Confirm';
import axios from 'axios';
import Sucess from '../alerts/Sucess';
import IngredientInput from './IngredientInput';
import { AuthContext } from '../../context/AuthContext';

const RegisterRecipes = () => {
    const [title, setTitle] = useState('');
    const { user } = useContext(AuthContext)
    const [intensity, setIntensity] = useState(1);
    const [description, setDescription] = useState('');
    const [preparation, setPreparation] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [descriptionCount, setDescriptionCount] = useState(description.length);
    const [preparationCount, setPreparationCount] = useState(preparation.length);

    const [setText] = useState('');
    const handleIntensidadeChange = (event) => {
        setIntensity(parseInt(event.target.value));
    };

    const handleInputChange = (e) => {
        const text = e.target.value;
        if (text.length <= 200) {
            setDescription(text);
            setDescriptionCount(text.length);
        }
    };

    const handleInputChangePreparation = (e) => {
        const text = e.target.value;
        if (text.length <= 400) {
            setPreparation(text);
            setPreparationCount(text.length);
        }
    };


    const addIngredientInput = () => {
        setIngredients([...ingredients, { name: '', amount: 1 }]);
    };

    const handleIngredientNameChange = (index, { name, amount }) => {
        const newIngredients = [...ingredients];
        newIngredients[index].name = name;
        newIngredients[index].amount = amount;
        setIngredients(newIngredients);
    };

    const handleIngredientAmountChange = (index, change) => {
        const newIngredients = [...ingredients];
        if (newIngredients[index].amount + change > 0) {
            newIngredients[index].amount += change;
            setIngredients(newIngredients);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        Confirm.register().then(async (result) => {
            if (result.isConfirmed) {
                const url = 'http://127.0.0.1:8000/api/recipes/';
                const config = {
                    headers: {
                        'Content-Type': 'application/json',

                    }
                };

                const formData = {
                    title: title,
                    intensity: intensity,
                    description: description,
                    preparation: preparation,
                    ingredients: ingredients.map((ingredient) => ({
                        name: ingredient.name,
                        amount: ingredient.amount,
                    })),
                    user_id: user.id,
                };

                try {
                    const response = await axios.post(url, formData, config);
                    if (response.status === 201) {
                        Sucess.register()
                        setTitle('')
                        setDescription('')
                        setIntensity([])
                        setPreparation('')
                        setIntensity(1)
                        setIngredients([])
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        });
    };


    return (
        <section className='dashboard registerRecipes'>
            <Menu /> 
            <section className="secForm">
                <form onSubmit={handleSubmit} className='formRecipes'>
                    <label className='formLabel'>Title
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className='informacoesCadastro'
                            required
                        />
                    </label>
                    <label className="formLabel">Description
                        <div style={{ position: 'relative' }}>
                            <textarea
                                required
                                value={description}
                                onChange={handleInputChange}
                                placeholder="Enter a maximum of 200 characters..."
                                rows={5}
                                cols={50}
                                style={{ width: '100%', height: '', resize: 'none', textIndent: '5px' }}
                            />
                            <div className="characterCount">{descriptionCount}/200 characters</div>
                        </div>
                    </label>
                    <label className='formLabel intensity'>Caffeine Intensity <div className="valuesIntensify">
                        {[1, 2, 3, 4, 5].map(value => (
                            <label key={value}>
                                <input
                                    required
                                    type="radio"
                                    name="intensity_cafffeine"
                                    value={value}
                                    checked={intensity === value}
                                    onChange={handleIntensidadeChange}
                                />
                                <p>{value}</p>
                            </label>
                        ))}
                    </div>
                    </label>
                    <label className='formLabel '>
                        {ingredients.map((ingredient, index) => (
                            <div key={index}>
                                <IngredientInput
                                    onNameChange={(name) => handleIngredientNameChange(index, name)}
                                    onAmountChange={(change) => handleIngredientAmountChange(index, change)}
                                    amount={ingredient}
                                />
                            </div>
                        ))}
                        <button type="button" onClick={addIngredientInput}>Add Ingredient</button>
                    </label>
                    <label className="formLabel">Preparation
                        <div style={{ position: 'relative' }}>
                            <textarea
                                required
                                value={preparation}
                                onChange={handleInputChangePreparation}
                                placeholder="Enter a maximum of 400 characters..."
                                rows={7}
                                cols={50}
                                style={{ width: '100%', height: '', resize: 'none', textIndent: '5px' }}
                            />
                            <div className="characterCount">{preparationCount}/400 characters</div>
                        </div>
                    </label>
                    <div className="buttonSubmit"><button type="submit" className="submitButton">Publish</button></div>
                </form>
            </section>

        </section>
    );
}

export default RegisterRecipes;