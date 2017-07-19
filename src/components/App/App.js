import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__body">
          <div className="app__main-title">
            <h2>&lt;/&gt;</h2>
            <h2>Viktors Jenovs</h2>
          </div>
          <div className="app__social">
            <a href="https://github.com/jenovs" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            &nbsp;/&nbsp;
            <a href="https://twitter.com/jviktors" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
          <div className="app__projects">
            <h3>&lt;Some projects /&gt;</h3>
            <div className="app__project">
              <a href="https://spotify-clone.jenovs.com" target="_blank" rel="noopener noreferrer">
                <strong>Spotify clone</strong> / Attempt to clone Spotify Webapp (works only in desktop browsers). <strong>ReactJS, Redux, SCSS</strong>
              </a>
            </div>
            <div className="app__project">
              <a href="https://fcc-speedrun.jenovs.com/" target="_blank" rel="noopener noreferrer">
                <strong>FreeCodeCamp Speedrun</strong> / Make as many as possible FreeCodeCamp's projects in limited amount of time. Only speed matters. <strong>ReactJS</strong>
              </a>
            </div>
            <div className="app__project">
              <a href="https://book-club.jenovs.com/" target="_blank" rel="noopener noreferrer">
                <strong>Book Trading App</strong> / Full-stack app made using <strong>ExpressJS, MongoDB, Passport and ReactJS</strong>
              </a>
            </div>
          </div>
          <div className="app__about-me">
            <h3>&lt;About me/&gt;</h3>
            <p>I'm a self-taught software developer specializing in Front-end.</p>
            <p>My skills include <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>JavaScript</strong> (<strong>ES6</strong>), <strong>NodeJS</strong>, <strong>ReactJS</strong>, <strong>Redux</strong>, <strong>SASS</strong>.</p>
            <p>I've also looked into some Back-end, i.e. <strong>ExpressJS</strong>, <strong>MongoDB</strong> and a little bit of <strong>Go</strong>.</p>
            <p></p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
