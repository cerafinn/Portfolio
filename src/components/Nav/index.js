import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    sections = [],
    setCurrentSection,
    currentSection,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentSection.name);
  }, [currentSection]);

  return (
    <div>
      <nav>
        <div class="nav-wrapper">
          <a href="#!" class="brand-logo">Andaleeb Farooq</a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down">
          {sections.map((section) => (
            <li className={`mx-1 ${currentSection === section.name && 'navActive'}`} key={section.name}>
              <span onClick={() => {
                setCurrentSection(section);
              }} >{capitalizeFirstLetter(section.name)}</span>
            </li>
          ))}
          </ul>
        </div>
      </nav>

  <ul class="sidenav" id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">Javascript</a></li>
    <li><a href="mobile.html">Mobile</a></li>
  </ul>
    </div>
  );
}

export default Nav;