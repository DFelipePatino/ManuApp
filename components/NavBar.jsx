import React from 'react';
import { Link } from 'react-router-dom';

const MangoButton = () => (
    <button className="mango-button" >
        Mangu
    </button>
);


const About = () => (
    <button className="mango-button" >
        About Mangüela
    </button>
);

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/" className="home-button">
                <MangoButton />
            </Link>
            <Link to="/about" className="about-button">
                <About />
            </Link>
        </div>
    );
};

export default Navbar;
