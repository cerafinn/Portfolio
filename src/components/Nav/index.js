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
          <a href="#!" class="brand-logo nameLink">Andaleeb Farooq</a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul class="right hide-on-med-and-down">
          {sections.map((section) => (
            <li className={`mainEl ${
              currentSection.name === section.name && 'navActive font-weight-bold'
              }`} key={section.name}>
              <span onClick={() => {setCurrentSection(section);}} >{capitalizeFirstLetter(section.name)}</span>
            </li>
          ))}
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
      {sections.map((section) => (
        <li className={`mx-1 sideEl ${currentSection === section.name && 'navActive'}`} key={section.name}>
        <span onClick={() => {
        setCurrentSection(section);
        }} >{capitalizeFirstLetter(section.name)}</span>
        </li>
      ))}
      </ul>
    </div>
  );
}

export default Nav;