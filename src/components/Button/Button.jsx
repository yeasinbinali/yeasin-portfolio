import React from 'react';
import './Button.css';

const Button = ({ name }) => {
    return (
        <div className='glow-on-hover'>
            <button>{name}</button>
        </div>
    );
};

export default Button;