import React from "react";

import "./Registration.css";

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            mail: "",
            address: "",
            degree: "",
            college: "",
            location: "",
            marks: "",
            results: ""
        }
    }

    handleName = (event) => {
        this.setState(() => ({
            name: event.target.value
        }))
    }

    handleMail = (event) => {
        this.setState(() => ({
            mail: event.target.value
        }))
    }

    handleAddress = (event) => {
        this.setState(() => ({
            address: event.target.value
        }))
    }

    handleDegree = (event) => {
        this.setState(() => ({
            degree: event.target.value
        }))
    }

    handleCollege = (event) => {
        this.setState(() => ({
            college: event.target.value
        }))
    }

    handleLocation = (event) => {
        this.setState(() => ({
            location: event.target.value
        }))
    }

    handleMarks = (event) => {
        this.setState(() => ({
            marks: event.target.value
        }))
    }

    handleButton = (event) => {
        const result = {
            name: this.state.name,
            mail: this.state.mail,
            address: this.state.address,
            degree: this.state.degree,
            college: this.state.college,
            location: this.state.location,
            marks: this.state.marks,
        }
        this.setState(() => ({
            results: result
        }))
    }

    render() {
        return (
            <React.Fragment>
                <div className="form"><br/>
                    <div><input type="text" value={this.state.name} placeholder="Enter name" onChange={this.handleName}></input></div><br />
                    <div><input type="text" value={this.state.mail} placeholder="Enter mail address" onChange={this.handleMail}></input></div><br />
                    <div><input type="text" value={this.state.address} placeholder="Enter address" onChange={this.handleAddress}></input></div><br />
                    <div><input type="text" value={this.state.degree} placeholder="Enter highest qualification" onChange={this.handleDegree}></input></div><br />
                    <div><input type="text" value={this.state.college} placeholder="Enter college name" onChange={this.handleCollege}></input></div><br />
                    <div><input type="text" value={this.state.location} placeholder="Enter college location" onChange={this.handleLocation}></input></div><br />
                    <div><input type="text" value={this.state.marks} placeholder="Enter marks" onChange={this.handleMarks}></input></div><br />
                    <div><button type="submit" onClick={this.handleButton}>Submit</button></div><br />
                </div>
                <div className="introduction">
                <h1>Introduction</h1>
                <div className="name">Name: {this.state.results.name}</div>
                <div>Mail: {this.state.results.mail}</div>
                <div>Address: {this.state.results.address}</div>
                </div>
                <div className="qualification">
                <h1>Qualification</h1>
                <div className="degree">Highest Qualification: {this.state.results.degree}</div>
                <div>College: {this.state.results.college}</div>
                <div>College Location: {this.state.results.location}</div>
                <div>Marks: {this.state.results.marks}</div>
                </div>
            </React.Fragment>
        )
    }
}

export default Registration;