import React from 'react';
import Navbar from './components/Navbar';
import './styles/main.css';
import { Route, useLocation, Switch } from 'react-router-dom';
import NavContextProvider from './contexts/NavContext';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { AnimatePresence} from 'framer-motion';

function App() {
  
  const location = useLocation();
  
  return (
    <div className="App">
      <NavContextProvider>
        <Navbar/>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route exact path="/" component={Home}/>
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={About}/>  
            <Route path="/contact" component={Contact}/>
          </Switch>
         </AnimatePresence>
        <Footer/>
      </NavContextProvider>
    </div>
  );
}

export default App;
