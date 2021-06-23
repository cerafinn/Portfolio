import React from 'react';

function About() {
  return (
    <section>
      <div>
        <h1 className="mb-3" id="about">i am;;</h1>
        <h2 className="mx-3">Andaleeb Farooq</h2>
        <div className="profile-img mx-4 mb-3"><img src={require(`../../assets/images/profile.jpg`).default} alt="profile"/></div>
        <div className="content">
          <p>Hello and welcome!</p>
          <p>Feel free to reach out to know more or to chat!</p>
        </div>
      </div>
    </section>
  )
}

export default About;