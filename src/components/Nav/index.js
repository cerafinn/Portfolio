import React from 'react';

function Nav() {
    return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="name">Andaleeb Farooq</span>
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="/about">About Me</a>
          </li>
          <li className="mx-2">
            <a href="/portfolio">Portfolio</a>
          </li>
          <li className="mx-2">
            <a href="/contact">Contact Me</a>
          </li>
          <li className="mx-2">
            <a href="/resume">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;