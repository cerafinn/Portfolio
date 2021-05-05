import React, { useState } from 'react';

function Portfolio() {
  const [projects] = useState([
    {
      name: 'Covid Dashboard',
      repo: 'covid-dashboard-application',
      link: '',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    }
    // {
    //   name: '',
    //   repo: '',
    //   deployed: '',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    // },
    // {
    //   name: '',
    //   repo: '',
    //   deployed: '',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    // },
    // {
    //   name: '',
    //   repo: '',
    //   deployed: '',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    // },
    // {
    //   name: '',
    //   repo: '',
    //   deployed: '',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    // },
    // {
    //   name: '',
    //   repo: '',
    //   deployed: '',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    // }
  ]);

  return (
    <div>
      <h1>projects;;</h1>
      <div className="content">
      </div>
    </div>
  )
}

export default Portfolio;