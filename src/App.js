import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout, BackTop } from 'antd';
import HeaderMenu from './components/Menu/Menu';

import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Genre from './components/Genre/Genre';
import ActorProfile from './components/ActorProfile/ActorProfile';
import * as CONFIG from './config/config';

import "antd/dist/antd.css";
import './App.css';

const {
  Footer, Content,
} = Layout;
 
class App extends Component {
  
  render() {    
    return (
      <BrowserRouter>
        <div className="App">
        <Layout className="layout" id="layout">
            <HeaderMenu />
            <Content xs={24} className="mainContent-outer">
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path={CONFIG.ROUTES.MOVIE+":name"} component={MovieDetails}/>
                <Route path={CONFIG.ROUTES.GENRE+":id/:name"} component={Genre}/>
                <Route path={CONFIG.ROUTES.PERSON+":id/:name"} component={ActorProfile}/>
                <Route component={Home}/>
              </Switch>                 
            </Content>
            <Footer>
              TMDB React Movies App ©{new Date().getFullYear()}
            </Footer>
            <BackTop />
          </Layout>   
        </div>                 
      </BrowserRouter>              
    );
  }
}

export default App;
