import React from 'react';
import '../styles.scss'
import { Route,Switch } from 'react-router-dom';
import { routes } from './routes';

export function App(props:{}) {
  return (
    
    <Switch>
      {routes.map((route, index) => {
        return (
          <Route key={index} path={route.path} component={route.component} exact/>
        );
      })}
    </Switch>
  );
}

export default App;
