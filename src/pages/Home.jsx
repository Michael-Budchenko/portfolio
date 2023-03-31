import React from "react";

import Header from "../components/header/Header";
import Projects from "./Projects";
import Contacts from "./Contacts";

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, TypeScript, ReactJS, Redux, HTML, CSS, NPM,
                BootStrap, MaterialUI, Yarn, StyledComponents
              </p>
            </li>
          </ul>
        </div>
      </main>
      <Projects />
      <Contacts />
    </>
  );
};

export default Home;
