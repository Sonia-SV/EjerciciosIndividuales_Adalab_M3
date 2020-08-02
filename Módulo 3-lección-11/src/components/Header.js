import React from 'react';
import { Link, Route } from 'react-router-dom';
import '../stylesheets/App.scss';

function renderLinkAndHightlightActive(route, text) {
  return (
    <Route
      path={route}
      children={({ match, history, location }) => {
        const activeClass = !!match && match.isExact ? 'nav-link--active' : 'nav-link--normal';
        return (
          <Link to={route} className={activeClass}>
            {text}
          </Link>
        );
      }}
    />
  );
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul className="menu">
            <li>{renderLinkAndHightlightActive('/', 'Home')}</li>
            <li>{renderLinkAndHightlightActive('/about', 'About')}</li>
            <li>{renderLinkAndHightlightActive('/pricing', 'Pricing')}</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
