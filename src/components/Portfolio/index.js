import React, { useState } from 'react';

function Portfolio() {
  const [projects] = useState([
    {
      name: 'Currenseed',
      repo: 'currenseed',
      link: 'https://github.com/DJ-KARMA/currenseed',
      deployed: 'https://currenseed.herokuapp.com/',
      description: "An online farmer's market that lets local vendors connect with local shoppers.",
      technologies: 'React, Redux, GraphQL, Express, MongoDB, Mongoose, Apollo, Bcrypt, Stripe, JSON Web Tokens, Chakra.ui'
    },
    {
      name: 'Reward Bank',
      repo: 'reward-bank',
      link: 'https://github.com/UTBootCampGroup2Project2/reward-bank',
      deployed: 'https://rocky-dawn-18669.herokuapp.com/#',
      description: "Reward Bank strives to teach children the importance of money management that reflects the increasingly digital world.",
      technologies: 'Express, Handlebars, MySQL, Sequelize, HTML, CSS, JavaScript, BootStrap'
    },
    {
      name: 'Covid Dashboard',
      repo: 'covid-dashboard-application',
      link: 'https://github.com/Runtime-Terrors-Organization/covid-dashboard-application',
      deployed: 'https://runtime-terrors-organization.github.io/covid-dashboard-application/',
      description: "A dashboard that shows the positive progress against COVID-19, focusing on the vaccination progress within the province of Ontario",
      technologies: 'HTML, CSS, JavaScript, jQuery, tailwindcss'
    },
    {
      name: 'Code Quiz',
      repo: 'code-quiz',
      link: 'https://github.com/cerafinn/code-quiz',
      deployed: 'https://cerafinn.github.io/code-quiz',
      description: "A quiz designed using JavaScript, testing user knowledge of the language",
      technologies: 'HTML, CSS, JavaScript, LocalStorage, Web APIs'
    },
    {
      name: 'Day Scheduler',
      repo: 'day-scheduler',
      link: 'https://github.com/cerafinn/day-scheduler',
      deployed: 'https://cerafinn.github.io/day-scheduler/',
      description: "A day scheduler that allows a user to plan out their day from 9AM to 6PM and save the information in local storage",
      technologies: 'HTML CSS, JavaScript, jQuery, BootStrap, Moment'
    },
    {
      name: 'Run Buddy',
      repo: 'run-buddy',
      link: 'https://github.com/cerafinn/run-buddy',
      deployed: 'https://cerafinn.github.io/run-buddy/',
      description: "Website that offers fitness training services",
      technologies: 'HTML, CSS'
    },
    {
      name: 'Horiseon',
      repo: 'horiseon',
      link: 'https://github.com/cerafinn/horiseon',
      deployed: 'https://cerafinn.github.io/horiseon/',
      description: "Refactoring of the website in order to improve accessibility",
      technologies: 'HTML, CSS'
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
              <h3 className="project-link">
                <a href={project.deployed} target="_blank" rel="noreferrer">{project.name}</a>{' - '}<a href={project.link} target="_blank" rel="noreferrer">Repo</a>
              </h3>
              <p className="project-description">{project.description}</p>
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