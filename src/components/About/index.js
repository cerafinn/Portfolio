import React from 'react';

function About() {
  return (
    <section>
      <div>
        <div className="profile-img mx-4 mb-5"><img src={require(`../../assets/images/profile.jpg`).default} alt="profile"/></div>
        <h1 className="mb-3" id="about">i am;;</h1>
        <h2 className="mx-3">Andaleeb</h2>
        <div className="content">
          <p>Welcome!</p>

          <p>I am a full-stack web developer based out of Kingston, Ontario. I enjoy building up websites piece by piece and pulling on strings of a problem until I've straightned out all the kinks. Otherwise, you can find me buried in a book or losing time to video games.</p>

          <p>Feel free to reach out if you have questions or want to chat!</p>
        </div>
      </div>
    </section>
  )
}

export default About;