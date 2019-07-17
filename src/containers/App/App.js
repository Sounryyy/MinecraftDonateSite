import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DonatePage from 'src/containers/DonatePage';
import InfoPage from 'src/containers/InfoPage';
import NotFoundPage from 'src/containers/NotFoundPage';
import Footer from '../../components/Footer';
import Header from '../../components/Header';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={DonatePage} />
            <Route exact path="/info" component={InfoPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default connect(state => ({
  testStore: state
}))(App);
