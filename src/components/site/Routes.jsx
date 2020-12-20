import React from 'react';

import { Switch, Route } from 'react-router-dom';

import FlexiblePage from '../../pages/FlexiblePage';
import Home from '../../pages/Home';

import data from '../../assets/data';

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/about'>
        <FlexiblePage data={data.about} />
      </Route>
      <Route path='/skills'>
        <FlexiblePage data={data.skills} />
      </Route>
      <Route path='/education'>
        <FlexiblePage data={data.education} />
      </Route>
      <Route path='/work'>
        <FlexiblePage data={data.work} />
      </Route>
      <Route path='/projects'>
        <FlexiblePage data={data.projects} />
      </Route>
    </Switch>
  );
}
