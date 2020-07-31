import React from 'react';
import UserCard from './card';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="post">
        <UserCard />
      </div>
    );
  }
}

export default App;
