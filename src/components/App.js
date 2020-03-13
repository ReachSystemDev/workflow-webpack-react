import React, { Component } from 'react';


class App extends Component{
    state = {
        perfil: {
            name: 'Dextroxitohero', 
            email: 'dextroxitohero@gmail.com',
            done: true
        }
    }

    handleClick = ()=>{
        const perfil = this.state.perfil;
        perfil.done = !perfil.done;
        this.setState({perfil})
    }

    


    render(){
        return(
            <div>
                <h1></h1>
                <h3>{this.state.perfil.name}</h3>
                <h3>{this.state.perfil.email}</h3>
                <h3>{this.state.perfil.done.toString()}</h3>
                <button onClick={this.handleClick}>
                        click
                </button>
            </div>
        )
    }
}

export default App;