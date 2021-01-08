import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Services from './pages/CitiesForDelivery/Services';
import OurApproach from './pages/OurProcedures/OurApproach';
import OurEthics from './pages/OurProcedures/OurEthics';

import StartABranch from './pages/JoinSixFeet/StartABranch';
import JoinABranch from './pages/JoinSixFeet/JoinABranch';

import About from './pages/WhoWeAre/About';
import Press from './pages/WhoWeAre/Press';
import Contact from './pages/WhoWeAre/Contact';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer, ActionFooter } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/our-approach' component={OurApproach} />
        <Route path='/our-ethics' component={OurEthics} />

        <Route path='/about' component={About} />
        <Route path='/press' component={Press} />
        <Route path='/contact' component={Contact} />

        <Route path='/start-a-branch' component={StartABranch} />
        <Route path='/join-a-branch' component={JoinABranch} />
      </Switch>
      <ActionFooter />
      <Footer />
    </Router>
  );
}

export default App;
