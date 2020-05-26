import React from 'react';
import './Data.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Data = (props) => {
    //console.log(props)
    const{ url, username, name, email, phone, website, salary } = props.data;
    return (
        <div className="user-data">
            <div className="img-add">
                <img src={url} alt=""/> <br/>
                <button
                 className="add"
                 onClick={ () => props.handleAddSalary(props.data)}
                 > 
                 <FontAwesomeIcon icon={faUserPlus} /> Add</button>
            </div>
            <div className="text">
                <h2>{username}</h2>
                Name :        {name} <br/>
                Email:        {email} <br/>
                Phone:        {phone} <br/>
                Website:      {website} <br/> <br/>
                <h2>Salary    {salary}</h2>
            </div>
            
        </div>
    );
};

export default Data;