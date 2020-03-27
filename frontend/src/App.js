import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Home from './containers/main/home';
import Footer from './containers/main/footer';
import Header from './containers/main/header';
import allCategories from './containers/categories/all-categories';

function App() {

  return (
    <div className="page">
      <Header />
      <div className='size-holder middle'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/tour' component={allCategories} />
        </Switch>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
