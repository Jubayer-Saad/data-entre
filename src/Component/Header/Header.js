import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    
    return (
        <div className="form">
            <div className="logo">
               Catalog
            </div>
            <h2>Salary Management Catelog</h2>

            <input placeholder="Search User. . ." type="text"/> <button className="form-submit" ><FontAwesomeIcon icon={faSearch} /> Search</button>
        </div>
    );
};

export default Header;