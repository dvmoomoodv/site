import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';


const Menu = () => {
    return (
// https://stackoverflow.com/questions/47455788/reactjs-navlink-activeclassname
        <nav class="navbar navbar-expand-lg">
            <div class="container">
            <a class="navbar-brand" href="/">
                <Logo></Logo>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                Menu
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                <NavLink className="nav-link" exact to="/">첫화면</NavLink>
                </li>
                <li class="nav-item">
                <NavLink className="nav-link" exact to="/career">경력</NavLink>
                </li>
                <li class="nav-item">
                <NavLink className="nav-link" exact to="/about">소개</NavLink>
                </li>
                {/* <li class="nav-item">
                <NavLink className="nav-link" to="/about/foo">About Foo</NavLink>
                </li>
                <li class="nav-item">
                <NavLink className="nav-link" to="/posts">Posts</NavLink>
                </li> */}
                </ul>
            </div>
            </div>
           
        </nav>
        // <div>
        //     <ul>
        //         <li></li>
        //         <li></li>
        //         <li></li>
        //         <li></li>
        //     </ul>
        //     <hr/>
        // </div>
    );
};

export default Menu;