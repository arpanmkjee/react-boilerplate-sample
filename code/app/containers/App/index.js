/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home/LandingPage';
import SearchPage from '../../pages/Flights/SearchPage';
import ReviewPage from '../../pages/Flights/ReviewPage';
import TravellerPage from '../../pages/Flights/TravellerPage';
import AncillaryPage from '../../pages/Flights/AncillaryPage';
import ConfirmationPage from '../../pages/Flights/ConfirmationPage';

// import HomePage from 'containers/HomePage/Loadable';
// import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
// import Header from 'components/Header';
// import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      {/* <Header /> */}
      <Switch> 
        <Route exact path="/" component={Home} /> 
        <Route exact path="/result" component={SearchPage} /> 
        <Route exact path="/review" component={ReviewPage} /> 
        <Route exact path="/traveller" component={TravellerPage} /> 
        <Route exact path="/ancillary" component={AncillaryPage} /> 
        <Route exact path="/confirm" component={ConfirmationPage} /> 
        <Route path="/features" component={NotFoundPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      {/* <Footer /> */}
      <GlobalStyle />
    </AppWrapper> 
  );
}
