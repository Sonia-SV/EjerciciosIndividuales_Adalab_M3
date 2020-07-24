import React from 'react';
import HeaderForm from './HeaderForm';

class Header extends React.Component {
  render() {
    return (
      <header className="col2 mb-1">
        <div>
          <h1 className="title">
            <span className="fas fa-envelope-open-text"></span>
            Gmail
          </h1>
        </div>
        <HeaderForm />
      </header>
    );
  }
}

export default Header;
