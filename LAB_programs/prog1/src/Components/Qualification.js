import React from 'react';
import './Qualification.css';

const Qualification = (props) => {
    return (
        <React.Fragment>
            <h1>Qualification</h1>
            <table className="qualification">
                <thead className="qualification-headers">
                    <tr>
                        <th>College</th>
                        <th>Degree</th>
                        <th>CGPA</th>
                    </tr>
                </thead>
                <tbody className="qualification-body">
                    {props.qualifications.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.college}</td>
                                <td>{item.degree}</td>
                                <td>{item.marks}</td>
                            </tr>

                            
                        )

                    })}
                </tbody>
            </table>
        </React.Fragment>
    )
}
export default Qualification