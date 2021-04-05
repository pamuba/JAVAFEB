import React from 'react';
import './myStyles.css';

function Stylesheet(props) {
    let className = props.condition ? 'primary' :''
    return (
        <div>
            <h1 className={`${className} font-xl`}>Stylesheets</h1>
        </div>
    )
}

export default Stylesheet
