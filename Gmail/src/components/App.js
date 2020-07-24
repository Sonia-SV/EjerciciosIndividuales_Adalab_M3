import React from 'react';
import Header from './Header';
import EmailList from './EmailList';
import EmailReader from './EmailReader';
import '../stylesheets/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <EmailList />
      <EmailReader />
    </div>
  );
}

export default App;
