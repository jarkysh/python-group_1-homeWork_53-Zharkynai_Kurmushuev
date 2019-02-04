import React, { Component } from 'react';
import './App.css';
import Number from './Number.js';

class App extends Component {
  render() {
    return (
       <div class="Appnumber">
            <Number/>
            <Number/>
            <Number/>
            <Number/>
            <Number/>
       <div>
       <button onClick={Math.floor(Math.random() * 28) + 5}>Generate
       </button>
                </div>
             </div>


    );
  }
  }



export default App;