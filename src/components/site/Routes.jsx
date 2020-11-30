import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import About from '../../pages/About';
import Skills from '../../pages/Skills';
import Projects from '../../pages/Projects';
import Experience from '../../pages/Experience';
import Contact from '../../pages/Contact';

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>

      <Route path='/about'>
        <About path='/about' />
      </Route>

      <Route path='/skills'>
        <Skills />
      </Route>

      <Route path='/experience'>
        <Experience />
      </Route>

      <Route path='/projects'>
        <Projects />
      </Route>

      <Route path='/contact'>
        <Contact />
      </Route>
    </Switch>
  );
}
