import React, { useEffect, useState } from 'react';
import Menu from '../menu/Menu.jsx';
import { useNavigate } from 'react-router-dom';
import './Search.scss'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import fetchRecipes from '../fetchRecipes/fetchRecipes.jsx';
import RecipeReaction from '../fetchRecipes/recipeReaction.jsx'

const Search = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredRecipes, setFilteredRecipes] = useState([]);
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


    const searchRecipe = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchTerm(searchTerm);

        const filtered = recipes.filter((recipe) =>
            recipe.title.toUpperCase().startsWith(searchTerm.toUpperCase())
        );
        setFilteredRecipes(filtered);
    };

    const viewRecipe = (item) => {
        navigate(`/viewRecipe/${item.id}`);
    };

    return (
        <section className="dashboard searchRecipes">
            <Menu />
            <section className="search">
                <form>
                    <label>Search by Title<input type="search" value={searchTerm} onChange={searchRecipe} /></label>
                </form>
                <div className="recipesFound">
                    {searchTerm.length > 0 && (
                        <ul>
                            {filteredRecipes.map((item) => (
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
                    )}
                </div>
            </section>
        </section>
    );
};

export default Search;
