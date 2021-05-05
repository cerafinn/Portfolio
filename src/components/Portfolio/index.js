import React, { useState } from 'react';

function Portfolio() {
  const [projects] = useState([
    {
      name: 'Reward Bank',
      repo: 'reward-bank',
      deployed: 'https://rocky-dawn-18669.herokuapp.com/#',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Covid Dashboard',
      repo: 'covid-dashboard-application',
      deployed: 'https://runtime-terrors-organization.github.io/covid-dashboard-application/',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Code Quiz',
      repo: 'code-quiz',
      deployed: 'https://cerafinn.github.io/code-quiz',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Day Scheduler',
      repo: 'day-scheduler',
      deployed: 'https://cerafinn.github.io/day-scheduler/',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Horiseon',
      repo: 'horiseon',
      deployed: 'https://cerafinn.github.io/Horiseon/',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Run Buddy',
      repo: 'run-buddy',
      deployed: 'https://cerafinn.github.io/run-buddy/',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    }
  ]);

  return (
    <div>
      <h1>projects;;</h1>
      <div className="content">
        <div className="collection-grid">
          {projects.map((project) => (
            <div className="project">
              <img src={require(`../../assets/projects/${project.repo}.png`).default} alt={project.name} className="project-img" />
            <div className="project-info">
              <h3>
                <a href={project.deployed}>{project.name}</a>{' - '}<a href={project.repo}>Repo</a>
              </h3>
              <p>{project.description}</p>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio;