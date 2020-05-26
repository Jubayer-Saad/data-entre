import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Body.css';
import Data from '../Data/Data';
import Total from '../Total/Total';

const Body = () => {
    const first10 = fakeData.slice(0,10)
    const [data] = useState(first10);
    const [salary, setSalary] = useState([])

    const handleAddSalary = (data) =>{
        const newSalary = [...salary,data]
        setSalary(newSalary);
    }

    return (
        <div className="body">
            <div className="data-container">
                     <p>Employees</p>

                    {
                      data.map(data =><Data handleAddSalary={handleAddSalary} data={data}></Data>)
                    }
                    
            </div>
            <div className="total">
                <p>Total</p>
                <Total salary={salary}></Total>
            </div>
            
        </div>
    );
};

export default Body;