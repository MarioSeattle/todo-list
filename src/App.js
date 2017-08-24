import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: []
        }
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to My TODO List</h2>
                </div>
                <ul>
                    {this.state.todos.map((todo, index) => <li key={index}>{todo}</li>)}
                </ul>
                <input type="text" placeholder="New TODO" /><button>Add TODO</button>
            </div>
        );
    }
}

export default App;