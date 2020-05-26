import React from 'react';
import './Total.css';

const Total = (props) => {

    const salary = props.salary;

    let total = 0;
    for (let i = 0; i < salary.length; i++) {
        const data = salary[i];
        total = total + data.salary;
        
    }

    return (
        <div className="total">
            <h2>Person Added:{"  "}{salary.length}</h2>
            <h1>Salary:{"   "}{total}</h1>
            <button>Pay Now</button>
        </div>
    );
};

export default Total;