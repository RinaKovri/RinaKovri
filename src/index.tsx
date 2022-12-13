import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './index.module.scss';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import Cv from './components/sites/cv';
import Projects from './components/sites/projects';
import AboutMe from './components/sites/aboutMe';
import { ModalContextProvider } from '@rintsin/common-components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const isProduction = window.location.href.includes('rinakovri.github.io')

root.render(
  <React.StrictMode>
    <ModalContextProvider>
      <Router /*basename={isProduction ? '/portfolio' : ''}*/>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='aboutMe' element={<AboutMe />} />
          <Route path='cv' element={<Cv />} />
          <Route path='projects' element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </ModalContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
