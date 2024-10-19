import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './components/login/Login';
import RegisterUser from "./components/registerUser/RegisterUser";
import Search from "./components/search/Search";
import RegisterRecipes from "./components/registerRecipes/RegisterRecipes";
import Feed from "./components/feed/Feed";
import ViewRecipe from "./components/recipe/Recipe";
import ProtectedRoute from "./ProtectedRoute";
import AuthContextProvider from "./context/AuthContext";
import UserProfile from "./components/userProfile/UserProfile";

function App() {
  return (
    <Router>
      <AuthContextProvider>

        <Routes>
          <Route path='*' element={<Login />} />
          <Route exact path='/' element={<Login />} />
          <Route path="/registerUser" element={<RegisterUser />} />
          <Route path='/' element={<ProtectedRoute />}>
            <Route path="/registerRecipes" element={<RegisterRecipes />} />
            <Route path="/search" element={<Search />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/viewRecipe/:id" element={<ViewRecipe />} />
            <Route path="/Profile" element={<UserProfile/>} />
          </Route>
        </Routes>
      </AuthContextProvider>

    </Router>
  );
}

export default App;
