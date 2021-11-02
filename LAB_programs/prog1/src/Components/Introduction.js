import React from 'react';
import './Introduction.css';

function Introduction(props){
    return(
        <React.Fragment>
            <h1>Introduction</h1>
            <div className="introduction">
                <div className="name">{props.name}</div>
                <div className="mail">{props.mail}</div>
                <div className="address">{props.address}</div>
                {/* <img src={props.image} alt=""></img> */}
            </div>
        </React.Fragment>
    
    )
}
export default Introduction;