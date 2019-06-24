import React from 'react';
import { Component} from 'react'
import Xiao from './X'
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       Hello world!
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello React!
        <Xiao></Xiao>
      </div>
    )
  }
}

export default App;
