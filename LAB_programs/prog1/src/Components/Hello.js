import React from 'react';
import Greeting from './Greeting';
class Hello extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div>Hello from component!</div>
                <Greeting name="Pulkit"/>
            </React.Fragment>
            
        );
    }

}
export default Hello;