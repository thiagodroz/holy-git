import React, { Component } from 'react';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <section className="about">
        <div className="about-topic">
          <h2 className="about-topic__title">Website</h2>
          <p className="about-topic__description">
            Holy Git was developed with the intention of practicing the development
            of websites with ReactJS. I had this idea because I love websites that
            generate statistics from profiles on social networking sites and still
            did not know anyone who did this with the GitHub profile.
          </p>
        </div>
        <div className="about-topic">
          <h2 className="about-topic__title">Author</h2>
          <p className="about-topic__description">
            Thiago Nogueira is a 24-year-old Brazilian web developer. Passionate about
            javascript, he loves to develop web applications, both the frontend and
            the backend. Addicted to power metal and folk metal, he is an active last.fm
            user and loves websites of use statistics.
          </p>
          <a className="about-topic__icon"
             href="https://github.com/thiagodroz"
             target="_blank"
             rel="noopener noreferrer">
            <i className="devicon-github-plain-wordmark"></i>
          </a>
          <a className="about-topic__icon"
             href="https://www.linkedin.com/in/thiago-nogueira-198347a8/"
             target="_blank"
             rel="noopener noreferrer">
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>
          <a className="about-topic__icon"
             href="https://www.last.fm/user/thiago93alex"
             target="_blank"
             rel="noopener noreferrer">
             <i className="fa fa-lastfm" aria-hidden="true"></i>
          </a>
          <a className="about-topic__icon"
             href="https://www.hackerrank.com/thiago_droz"
             target="_blank"
             rel="noopener noreferrer">
             <i className="fa fa-list-ol" aria-hidden="true"></i>
          </a>
        </div>
        <div className="about-topic">
          <h2 className="about-topic__title">Thanks</h2>
          <p className="about-topic__description">
            Thanks to
            <a className="about-topic__ref"
               href="https://www.linkedin.com/in/calazans10/"
               target="_blank"
               rel="noopener noreferrer">
              Jeferson Calazans
            </a>
            for the support during the development of the website.
          </p>
        </div>
        <div className="about-topic">
          <h2 className="about-topic__title">Third Party Icon Fonts</h2>
          <p className="about-topic__description">
            <a className="about-topic__ref"
                href="http://fizzed.com/oss/font-mfizz/"
                target="_blank"
                rel="noopener noreferrer">
              Mfizz
            </a>
            <a className="about-topic__ref"
                href="http://konpa.github.io/devicon/"
                target="_blank"
                rel="noopener noreferrer">
              Devicon
            </a>
            <a className="about-topic__ref"
                href="http://fontawesome.io/"
                target="_blank"
                rel="noopener noreferrer">
              Font Awesome
            </a>
          </p>
        </div>
      </section>
    );
  }
}