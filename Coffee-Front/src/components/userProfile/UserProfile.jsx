import React, { useContext, useEffect, useState } from 'react'
import fetchRecipes from '../fetchRecipes/fetchRecipes';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Menu from '../menu/Menu';
import './UserProfile.scss'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import RecipeReaction from '../fetchRecipes/recipeReaction';


const UserProfile = () => {
  const { user, profileImage } = useContext(AuthContext);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getRecipes = async () => {
      const data = await fetchRecipes();
      if (data) {

        const filtered = data.filter(recipe => recipe.user_id === user.id);
        setFilteredRecipes(filtered);
      }
    };
    getRecipes();
  }, [user.id]);

  const viewRecipe = (item) => {
    navigate(`/viewRecipe/${item.id}`);
  }
  return (
    <section className="dashboard feed">
      <Menu />
      <section className="profile">
        <div className="user-profile">
          {profileImage && (
            <img src={profileImage} alt="Profile" className="profile-image" />
          )}
          <h2>Welcome, <span>{user.username}</span>!</h2>
        </div>
        <hr />
       
          {filteredRecipes.length > 0 ? (
            <div className="recipesUser">
              <ul>
                {filteredRecipes.map((item) => (
                  <li key={item.id}>
                    <div className="descriptionRecipe">
                      <h2>{String(item.title).toUpperCase()}</h2>
                      <p>{String(item.description)}</p>
                    </div>
                    <div className='footerRecipe'>
                      <button onClick={() => viewRecipe(item)}><i><MdOutlineKeyboardArrowRight /></i>VIEW THIS RECIPE</button>
                      <RecipeReaction item={item} recipes={filteredRecipes} setRecipes={setFilteredRecipes} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="noRegisteredRecipes">
              <h2>There are no registered recipes.</h2>
            </div>
          )}
      </section>
    </section>
  )
}

export default UserProfile
