import React from 'react'
import { FaHome, FaUser, FaSearch } from 'react-icons/fa';
import { BsUpload } from "react-icons/bs";
import './Menu.scss';
import { Link } from 'react-router-dom';
import { CiLogout } from "react-icons/ci";
import { CgAdd } from "react-icons/cg";

const Menu = () => {
    return (
        <div className="sidebar">
            <h1 className="title">Coffe Recipes</h1>
            <section className="menuLeft">
                <div className="menu">
                    <Link className='LinkRouterMenu' to="/feed">
                        <FaHome className='icon' /> Home
                    </Link>

                    <Link className='LinkRouterMenu' to="/Profile">
                        <FaUser className='icon' /> Profile
                    </Link>

                    <Link className='LinkRouterMenu' to="/Search">
                        <FaSearch className='icon' /> Search
                    </Link>

                    <Link className="new-recipe" to="/RegisterRecipes">
                        <CgAdd className='icon' />New Recipe</Link>
                </div>
                <div className="logout">
                    <Link className='LinkLogout' to="/">
                        <CiLogout />
                    </Link>
                </div>
            </section>

            <section className="menuBotton">
                <ul className="menu">
                    <li><Link className='LinkRouterMenu' to="/feed">
                        <FaHome />
                    </Link>
                    </li>
                    <li>
                        <Link className='LinkRouterMenu' to="/Profile">
                            <FaUser />
                        </Link>
                    </li>
                    <li>
                        <Link className='LinkRouterMenu' to="/RegisterRecipes">
                            <BsUpload />
                        </Link>
                    </li>
                    <li>
                        <Link className='LinkRouterMenu' to="/Search">
                            <FaSearch />
                        </Link>
                    </li>
                    <li>
                        <Link className='LinkRouterMenu' to="/">
                            <CiLogout />
                        </Link>
                    </li>
                </ul>


            </section>
        </div>
    )
}

export default Menu
