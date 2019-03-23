import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import HeaderMenu from './components/Menu/Menu';

import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';
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
        <Layout className="layout">
            <HeaderMenu />
            <Content className="mainContent-outer">
              <div className="mainContent" id="mainContent">
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path={CONFIG.MOVIE_DETAILS_PAGE+":name"} component={MovieDetails}/>
                <Route component={Home}/>
              </Switch>                 
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Movies App ©2019 Created by Amit Patil
            </Footer>
          </Layout>   
        </div>                 
      </BrowserRouter>              
    );
  }
}

export default App;
