import React from 'react';
import './Selected.css';

const Selected = (props) => {
    console.log(props.select);
    const {image, name, salary} = props.select;
    return (
        <div className="selected-area">
            <div className="selected-info">
                <img src={image} alt=""/>
                <p><small>Name: {name}</small></p>
                <p><small>Salary: ${salary}</small></p>
            </div>
        </div>
    );
};

export default Selected;