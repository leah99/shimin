import React, { useEffect } from "react";
import {Header, Home, About, Projects, Contact, Footer, GrowingBackground} from './components';
import AOS from "aos";
import "aos/dist/aos.css";
import './App.scss';

function App() {
  useEffect(() => {
    AOS.init({duration : 800});
    AOS.refresh();
  }, [])
  
  return (
    <div className="app">
      <Header />
      <div id="home" className="app__home"><Home /></div>
      <div id="about" className="app__about">
        <div data-aos="fade-down"><GrowingBackground customClass={"app__about__title"} text={"ABOUT"} /></div>
        <About customClass={"app__about__container"} />
      </div>
      <div id="projects" className="app__projects">
        <div data-aos="fade-down"><GrowingBackground customClass={"app__projects__title"} text={"PROJECTS"} /></div>
        <div data-aos="flip-up"><Projects customClass={"app__projects__content"} /></div>
      </div>
      <div id="contact" className="app__contact"><Contact /></div>
      <div className="app__footer"><Footer description="2022-2023 Low Shi Min"/></div>
    </div>
  );
}

export default App;