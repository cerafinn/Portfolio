import React from 'react';

function Footer() {
  const accounts = [
    { name: "Github" , link: "http://github.com/cerafinn", icon: "devicon-github-original" },
    { name: "LinkedIn" , link: "https://www.linkedin.com/in/andaleebfarooq/", icon: "devicon-linkedin-plain" },
    { name: "Twitter" , link: "https://twitter.com/cerahime", icon: "devicon-twitter-original" }
    // For future accounts: { name: "" , link: "", icon: "" }
  ]

  return (
    <footer>
              {currentPhotos.map((image, i) => (
          <img
            alt={image.name}
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            className="img-thumbnail mx-1"
            key={image.name}
            onClick={() => toggleModal(image, i)}
          />
        ))}
      | <a href="http://github.com/cerafinn"><i class="devicon-github-original"></i></a> 
      | <a href="https://www.linkedin.com/in/andaleebfarooq/"><i class="devicon-linkedin-plain"></i></a>
      | <a href="https://twitter.com/cerahime"><i class="devicon-twitter-original"></i></a>
    </footer>
  )
}

export default Footer;