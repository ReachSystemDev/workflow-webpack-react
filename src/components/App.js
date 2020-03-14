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
            <div className='container'>
                <div className="row">
                    <div className="col-md-12">
                        <img src='../static/img/boba-feat-chibi.jpg' />
                        <h1 className="text-center">Configuracion de react con webpack</h1>
                        <h3 className="text-center">{this.state.perfil.name}</h3>
                        <h3 className="text-center">{this.state.perfil.email}</h3>
                        <h3 className="text-center">{this.state.perfil.done.toString()}</h3>
                        <button
                            className="btn btn-primary btn-block" 
                            onClick={this.handleClick}
                        >
                            Dame click
                        </button>  
                    </div>
                </div>
            </div>
        )
    }
}

export default App;