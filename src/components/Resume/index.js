import React from 'react';

function Resume() {
  const frontendTechnologies = [
    { name: "HTML" , icon: "devicon-html5-plain-wordmark colored" },
    { name: "CSS" , icon: "devicon-css3-plain-wordmark colored" },
    { name: "JS" , icon: "devicon-javascript-plain colored" },
    { name: "Heroku" , icon: "devicon-heroku-plain-wordmark colored" },
    { name: "Express" , icon: "devicon-express-original-wordmark" },
    { name: "Handlebars" , icon: "devicon-handlebars-plain-wordmark colored" },
    { name: "React" , icon: "devicon-react-original-wordmark colored" },
    // { name: "" , icon: "" },
  ]

  const backendTechnologies = [
    { name: "Node" , icon: "devicon-nodejs-plain-wordmark colored" },
    { name: "Heroku" , icon: "devicon-heroku-plain-wordmark colored" },
    { name: "Express" , icon: "devicon-express-original-wordmark" },
    { name: "jQuery" , icon: "devicon-jquery-plain-wordmark colored" },
    { name: "MySQL" , icon: "devicon-mysql-plain colored" },
    { name: "MongoDB" , icon: "devicon-mongodb-plain-wordmark colored" },
    { name: "NPM" , icon: "devicon-npm-original-wordmark colored" },
    { name: "Git" , icon: "devicon-git-plain-wordmark colored" }
    // { name: "" , icon: "" },
  ]

  return (
    <div className>
      <h2>proficiencies;;</h2>
      <section className="row">
        <div className="col-md">
          <ul>
            {frontendTechnologies.map(technology => (
            <li><i className={technology.icon}></i></li>
            ))}
          </ul>
        </div>
        <div className="col-md">
          <ul>
            {backendTechnologies.map(technology => (
            <li><i className={technology.icon}></i></li>
            ))}
          </ul>
        </div>
        <div className="col-md">
          You can find my resume <a href="/">here</a>
        </div>
      </section>
    </div>
  )
}

export default Resume;