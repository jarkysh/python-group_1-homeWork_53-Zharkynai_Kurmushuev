import React, {Component} from 'react';
import './Number.css';

class Number extends Component {
   render() {
        return (
            <div className="number">
              <div class="text-wrapper">
               <h1 className="h1">{Math.floor(Math.random() * 28) + 5}</h1>
                <p>{this.props.children}</p>
              </div>
            </div>
        )
    }
}



export default Number;
