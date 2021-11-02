import logo from './logo.svg';
import './App.css';
import React from 'react';
import Introduction from './Components/Introduction';
import Qualification from './Components/Qualification';
import Project from './Components/Project';


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name:"Pulkit Nagar",
      mail:"pulkitn.mca20@rvce.edu.in",
      address:"Mysuru Road,RVCE, Bangalore(Karnataka)-560059",
      qualifications:[
        {
          college: "RVCE",
          degree: "MCA",
          marks: 7.88,
        },
        {
          college: "JECRC",
          degree: "BCA",
          marks: 7.11,
        },
      ],
      techStack:["MongoDB", "Express.js","React.js","Node.js"],

    }
  }
  
  render(){
    return(
      <React.Fragment>
        <Introduction
        name={this.state.name}
        mail={this.state.mail}
        address={this.state.address}
        />
        <Qualification
          qualifications={this.state.qualifications}/>
        <Project
          techStack={this.state.techStack}/>
      </React.Fragment>
    )
  }
}
export default App;