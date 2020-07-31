import React, { Component } from 'react';
import './App.scss';

const img = 'https://www.placecage.com/c/250/250';

class App extends Component {
  render() {
    return (
      <div className="post">
        <header className="post-header">
          <img src={img} className="post-img" alt="profile img" />
          <div className="post-info">
            <h1 className="post-title">Nicolas Cage</h1>
            <h4 className="post-date">Lunes 26 de junio de 2017</h4>
          </div>
        </header>
        <main className="post-main">
          <p className="post-content">
            Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows,
            and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television
            programs. Some don't, become nothing. She starred in one of the ones that became nothing.
          </p>
          <div className="post-extra">
            <p className="post-more">Leer más...</p>
            <p className="like">37 💖</p>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
