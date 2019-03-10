import React, { Component } from 'react';
import Home from './Views/Home';
import AddItem from './Views/AddItem';
import CartList from './Views/CartList';

import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/AddItem" component={AddItem} />
          <Route path="/CartList" component={CartList} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
