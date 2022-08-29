import React from 'react'
import {Header, Home, About, Projects, Contact, Footer, GrowingBackground} from './components'
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <div id="home" className="app__home"><Home /></div>
      <div id="about" className="app__about">
        <GrowingBackground customClass={"app__about__title"} text={"ABOUT"} />
        <About customClass={"app__about__container"} />
      </div>
      <div id="projects" className="app__projects">
        <GrowingBackground customClass={"app__projects__title"} text={"PROJECTS"} />
        <Projects customClass={"app__projects__content"} />
      </div>
      <div id="contact" className="app__contact"><Contact /></div>
      <div className="app__footer"><Footer description="2022-2023 Low Shi Min"/></div>
    </div>
  );
}

export default App;