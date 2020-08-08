import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo192.png';

class Nav extends Component {
    render() {
        return (
            <nav>
                <Link to="/" className="link">
                    <div className="brand">
                        <img src={logo} alt="ReactJS" className="logo-img"></img>
                        <h3 className="brand-name">ReactJS</h3>
                    </div>
                </Link>

                <ul className="nav-links">
                    <Link to="/tugas11" className="link">
                        <li>Tugas 11 - Table </li>
                    </Link>
                    <Link to="/tugas12" className="link">
                        <li className="link">Tugas 12 - Timer </li>
                    </Link>
                    <Link to="/tugas13" className="link">
                        <li className="link">Tugas 13 - List Buah</li>
                    </Link>
                    <Link to="/tugas14" className="link">
                        <li className="link">Tugas 14 - List Buah API</li>
                    </Link>
                    <Link to="/tugas15" className="link">
                        <li className="link">Tugas 15 - List Buah Context</li>
                    </Link>
                </ul>
            </nav>
        )
    }
}



export default Nav; 