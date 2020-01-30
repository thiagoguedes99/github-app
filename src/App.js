import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import { Header } from './components';
import { Home, List, Detail } from './pages';

import './App.css';

function App() {
  return (
    <>
     <Header />

     <Router>
        <Switch>
          <Route exact={true} path={'/'} render={props => <Home {...props} />} />

          <Route exact={true} path={`/list`} render={props => <List {...props} />} />

          <Route path={`/detail/:user`} render={props => <Detail {...props} />} />
{/* 
          <Route path="/error404" render={props => <NotFound {...props} />} />

          <Route path="/robo" render={props => <PageRobot {...props}/>} />

          <Route path="*" render={props => <NotFound {...props} />} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
