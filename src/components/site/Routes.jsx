import React from 'react';

import { Switch, Route } from 'react-router-dom';

import About from '../../pages/About';
import Home from '../../pages/Home';
import Work from '../../pages/Work';
import Skills from '../../pages/Skills';
import Projects from '../../pages/Projects';

import data from '../../assets/data';

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/about'>
        <About data={data.about} />
      </Route>
      <Route path='/skills'>
        <Skills data={data.skills} />
      </Route>
      <Route path='/work'>
        <Work data={data.work} />
      </Route>
      <Route path='/projects'>
        <Projects data={data.projects} />
      </Route>
    </Switch>
  );
}
