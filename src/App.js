import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Mammals from './pages/Mammals';
import Birds from './pages/Birds';
import Reptiles from './pages/Reptiles';
import AnimalDetail from './components/AnimalDetail/AnimalDetail';

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact ><Home/></Route>
        <Route path="/mammals"><Mammals/> </Route>
        <Route path="/Birds"><Birds/> </Route>
        <Route path="/reptiles"><Reptiles/> </Route>
        <Route path="/animal/:id" element={AnimalDetail} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
