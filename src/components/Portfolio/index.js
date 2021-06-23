import React, { useState } from 'react';

function Portfolio() {
  const [projects] = useState([
    {
      name: 'Currenseed',
      repo: 'currenseed',
      link: 'https://github.com/DJ-KARMA/currenseed',
      deployed: 'https://currenseed.herokuapp.com/',
      description: '',
      technologies: ''
    },
    {
      name: 'Reward Bank',
      repo: 'reward-bank',
      link: 'https://github.com/UTBootCampGroup2Project2/reward-bank',
      deployed: 'https://rocky-dawn-18669.herokuapp.com/#',
      description: 'Project',
      technologies: ''
    },
    {
      name: 'Covid Dashboard',
      repo: 'covid-dashboard-application',
      link: 'https://github.com/Runtime-Terrors-Organization/covid-dashboard-application',
      deployed: 'https://runtime-terrors-organization.github.io/covid-dashboard-application/',
      description: '',
      technologies: 'HTML, CSS, JavaScript, jQuery, tailwindcss'
    },
    {
      name: 'Code Quiz',
      repo: 'code-quiz',
      link: 'https://github.com/cerafinn/code-quiz',
      deployed: 'https://cerafinn.github.io/code-quiz',
      description: 'JavaScript',
      technologies: ''
    },
    {
      name: 'Day Scheduler',
      repo: 'day-scheduler',
      link: 'https://github.com/cerafinn/day-scheduler',
      deployed: 'https://cerafinn.github.io/day-scheduler/',
      description: 'jQuery',
      technologies: ''
    },
    {
      name: 'Horiseon',
      repo: 'horiseon',
      link: 'https://github.com/cerafinn/horiseon',
      deployed: 'https://cerafinn.github.io/horiseon/',
      description: 'Code Refactor',
      technologies: ''
    },
    {
      name: 'Run Buddy',
      repo: 'run-buddy',
      link: 'https://github.com/cerafinn/run-buddy',
      deployed: 'https://cerafinn.github.io/run-buddy/',
      description: 'HTML/CSS',
      technologies: ''
    }
    // ,
    // {
    //   name: '',
    //   repo: '',
    //   link: '',
    //   deployed: '',
    //   description: '',
    //   technologies: ''
    // }
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
                <a href={project.deployed} target="_blank" rel="noreferrer">{project.name}</a>{' - '}<a href={project.link} target="_blank" rel="noreferrer">Repo</a>
              </h3>
              <p>{project.description}</p>
              <p><strong>Technologies:</strong> {project.technologies}</p>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio;