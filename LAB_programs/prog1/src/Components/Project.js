import React from "react";
import './Project.css';

const Project = (props) =>{
    return(
        <React.Fragment>
            <h1>Project</h1>
            <h3>Tech stack used</h3>
            <ul>
                {props.techStack.map((item,index)=>{
                    return(
                        <li key={index}>{item}</li>
                
                    )
                    // console.log(item)
                })}
                
            </ul>
        </React.Fragment>
    )
}
export default Project;