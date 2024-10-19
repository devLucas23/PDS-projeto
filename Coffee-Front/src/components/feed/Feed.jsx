import React, { useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Menu from '../menu/Menu';
import './Feed.scss'
import { useNavigate } from 'react-router-dom';
import fetchRecipes from '../fetchRecipes/fetchRecipes';
import RecipeReaction from '../fetchRecipes/recipeReaction';

const Feed = () => {
    const [recipes, setRecipes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getRecipes = async () => {
            const data = await fetchRecipes();
            if (data) {
                setRecipes(data);
            }
        };
        getRecipes();
    }, []);

    const viewRecipe = (item) => {
        navigate(`/viewRecipe/${item.id}`);
    }


    return (
        <section className='dashboard feed'>
            <Menu />

            {recipes.length > 0 ? (
                <div className="recipes">
                    <ul>
                        {recipes.map((item) => (
                            <li key={item.id}>
                                <h2>{item.title ? item.title.toUpperCase() : ''}</h2>
                                <p>{item.description}</p>

                                <div className='footerRecipe'>
                                    <button onClick={() => viewRecipe(item)}><i><MdOutlineKeyboardArrowRight /></i>VIEW THIS RECIPE</button>

                                    <RecipeReaction item={item} recipes={recipes} setRecipes={setRecipes} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className="recipes">
                    <h2>There are no registered recipes.</h2>
                </div>
            )}
        </section>
    );
};

export default Feed;
