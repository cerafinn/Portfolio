import React, {useEffect} from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(currentPage) {
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

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

    return (
    <header className="flex-row px-1">
      <nav>
      <div class="nav-wrapper">
      <a href="#!" class="brand-logo">Andaleeb Farooq</a>
      <a href="/#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">Javascript</a></li>
        <li><a href="mobile.html">Mobile</a></li>
      </ul>
      </div>
    </nav>

      <ul class="sidenav" id="mobile-demo">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">Javascript</a></li>
        <li><a href="mobile.html">Mobile</a></li>
      </ul>
    </header>
  );
};

export default Nav;