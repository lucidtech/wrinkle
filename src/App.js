import React, { Component } from 'react';
import logo from './logo.svg';
import './semantic.min.css';
import { Image } from 'semantic-ui-react'
import Quiz from './quiz'

class App extends Component {
  render() {
    return (
      <div>

        {/* <Image fluid src="backdrop.png"/> */}
        <Quiz/>
      </div>
    );
  }
}

export default App;
