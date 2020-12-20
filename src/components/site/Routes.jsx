import React from 'react';

import { Switch, Route } from 'react-router-dom';

import About from '../../pages/About';
import Home from '../../pages/Home';
import Work from '../../pages/Work';
import Skills from '../../pages/Skills';
import Projects from '../../pages/Projects';

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/skills'>
        <Skills />
      </Route>
      <Route path='/work'>
        <Work />
      </Route>
      <Route path='/projects'>
        <Projects />
      </Route>
    </Switch>
  );
}
