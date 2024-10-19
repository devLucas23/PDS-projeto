import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Menu from '../menu/Menu'
import './Recipe.scss'

// ViewRecipe segue o padrão de Componente Funcional do React
const ViewRecipe = () => {
    const { id } = useParams()
    const [recipe, setRecipe] = useState({})
    const getRecipe = useCallback(async () => {
        const url = `http://127.0.0.1:8000/api/recipes/${id}/`;
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        try {
            const response = await axios.get(url, config);
            if (response.status === 200) {
                setRecipe(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }, [id])
    useEffect(() => {
        getRecipe()
    }, [getRecipe])
    const getCaffeineIntensity = () => {
        if (recipe.intensity === 1) {
            return 'Weak';
        } else if (recipe.intensity === 2) {
            return 'Medium';
        } else if (recipe.intensity === 3) {
            return 'Strong';
        } else if (recipe.intensity === 4) {
            return 'Very Strong';
        } else if (recipe.intensity === 5) {
            return 'Extra Strong';
        } else {
            return '';
        }
    };
    return (
        <section className='dashboard recipe'>
            <Menu />
            <section className="viewRecipe">
                <div className="detailsRecipe">
                    <h1>{recipe.title ? recipe.title.toUpperCase() : ''}</h1>
                    <h2>INGREDIENTS:</h2>
                    <ul>
                        {recipe.ingredients &&
                            recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>
                                    {ingredient.quantify}x  {ingredient.name}
                                </li>
                            ))
                        }
                    </ul>
                    <h2>PREPARATION:</h2>
                    <p>{recipe.preparation}</p>
                    <h2>CAFFEINE INTENSITY: <span>{getCaffeineIntensity()}</span></h2>

                </div>
            </section>
        </section>
    )
}

export default ViewRecipe
