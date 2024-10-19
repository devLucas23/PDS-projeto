import React from 'react';
import axios from 'axios';
import { GoHeart, GoHeartFill } from "react-icons/go";

const RecipeReaction = ({ item, recipes, setRecipes }) => {
    const reactRecipe = async () => {
        let updatedLikes = item.likes;
        let updatedIcon;

        if (item.likedByCurrentUser) {
            updatedLikes -= 1;
            updatedIcon = <GoHeart />;
        } else {
            updatedLikes += 1;
            updatedIcon = <GoHeartFill />;
        }

        const url = `http://127.0.0.1:8000/api/recipes/${item.id}/`;
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        try {
            const response = await axios.patch(url, { likes: updatedLikes }, config);
            if (response.status === 200) {
                const updatedRecipes = recipes.map((recipe) =>
                    recipe.id === item.id ? { ...recipe, likes: updatedLikes, likedByCurrentUser: !item.likedByCurrentUser } : recipe
                );
                setRecipes(updatedRecipes);
                return response.data;
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    };

    return (
        <div className='likes'>
            <button onClick={reactRecipe}> <i className='icon'>{item.likedByCurrentUser ? <GoHeartFill /> : <GoHeart />}</i>
            </button>
            <p>{item.likes}</p>
        </div>
    );
};

export default RecipeReaction;
