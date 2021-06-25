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
        <div className="nav-wrapper">
          <span className="brand-logo nameLink"><img src={require(`../../assets/images/nav-img.png`).default} alt="nav-img" className="nav-img"/></span>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
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

      <ul className="sidenav" id="mobile-demo">
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