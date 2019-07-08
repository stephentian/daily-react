import React, { Component } from 'react';

// 版本一
// import { HashRouter, Route, Link } from 'react-router-dom';
// import Main from '../../components/Main'
// import Topic from '../../components/Topic'
// import About from '../../components/About'

// 版本一
// class Home extends Component {
//   render() {
//     return (
//       <HashRouter>
//         <div>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/topics">Topics</Link>
//             </li>
//           </ul>
//           <hr />
//           <Route path="/" exact={true} component={Main}></Route>
//           <Route path="/about" exact={true} component={About}></Route>
//           <Route path="/topics" exact={true} component={Topic}></Route>
//         </div>
//       </HashRouter>
//     );
//   }
// }


// 版本 2

import { Link } from 'react-router-dom';
class Home extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/main">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topic">Topic</Link></li>
        </ul>
        <hr />
        {this.props.children}
      </div>
    );
  }
}

export default Home
