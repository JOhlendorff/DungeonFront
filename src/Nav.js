import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';



function Nav() {
    return (
        <nav>
            <h3>Logo no go bro</h3>
            <ul className="nav-links">
                <Link to="redsun">
                <li>Redsun page</li>
                </Link>
                <Link to="equipment">
                <li>Equipment</li>
                </Link>
                <Link to="CharacterCreation">
                <li>Create Character</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;