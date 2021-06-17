import React from 'react';

function Footer() {
  const accounts = [
    { name: "Github" , link: "http://github.com/cerafinn", icon: "devicon-github-original" },
    { name: "LinkedIn" , link: "https://www.linkedin.com/in/andaleebfarooq/", icon: "devicon-linkedin-plain" },
    { name: "Twitter" , link: "https://twitter.com/cerahime", icon: "devicon-twitter-original" },
    { name: "Email" , link: "mailto:andaleeb.farooq@gmail.com", icon: "far fa-envelope" }
    // For future accounts: { name: "" , link: "", icon: "" }
  ]

  return (
    <footer>
      {accounts.map(account => (
        <a
        href={account.link}
        key={account.name}
        target="_blank" rel="noreferrer"
        >
        <i className={account.icon}></i></a>
        ))}
    </footer>
  )
}

export default Footer;