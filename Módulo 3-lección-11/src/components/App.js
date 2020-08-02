import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Pricing from './Pricing';
import '../stylesheets/App.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/pricing" component={Pricing} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
