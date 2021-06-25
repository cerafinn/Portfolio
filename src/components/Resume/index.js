import React from 'react';

function Resume() {
  const frontendTechnologies = [
    { name: "HTML" , icon: "devicon-html5-plain-wordmark" },
    { name: "CSS" , icon: "devicon-css3-plain-wordmark" },
    { name: "JS" , icon: "devicon-javascript-plain" },
    { name: "Heroku" , icon: "devicon-heroku-plain-wordmark" },
    { name: "Express" , icon: "devicon-express-original-wordmark" },
    { name: "Handlebars" , icon: "devicon-handlebars-plain-wordmark" },
    { name: "React" , icon: "devicon-react-original-wordmark" },
    // { name: "" , icon: "" },
  ]

  const backendTechnologies = [
    { name: "Node" , icon: "devicon-nodejs-plain-wordmark" },
    { name: "Heroku" , icon: "devicon-heroku-plain-wordmark" },
    { name: "Express" , icon: "devicon-express-original-wordmark" },
    { name: "jQuery" , icon: "devicon-jquery-plain-wordmark" },
    { name: "MySQL" , icon: "devicon-mysql-plain" },
    { name: "MongoDB" , icon: "devicon-mongodb-plain-wordmark" },
    { name: "NPM" , icon: "devicon-npm-original-wordmark" },
    { name: "Git" , icon: "devicon-git-plain-wordmark" }
    // { name: "" , icon: "" },
  ]

  return (
    <div>
      <h1>proficiencies;;</h1>
        <section className="row content">
          <div className="col-md technology">
            <h3>frontend technologies;;</h3>
              {frontendTechnologies.map(technology => (
              <span><i className={`tech ${technology.icon}`}></i></span>
              ))}
          </div>
          <div className="col-md technology">
            <h3>backend technologies;;</h3>
              {backendTechnologies.map(technology => (
              <span><i className={`tech ${technology.icon}`}></i></span>
              ))}
          </div>
          <div className="col-md text-center mb-3">
            You can find my resume <a className="resume" href={require("../../assets/files/resume.docx").default} download>here</a>
          </div>
        </section>
    </div>
  )
}

export default Resume;