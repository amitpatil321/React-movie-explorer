import React, { Component } from 'react';
import { Layout } from 'antd';
import HeaderMenu from './components/Menu/Menu';

import ListMovies from './components/ListMovies/ListMovies'

import "antd/dist/antd.css";
import './App.css';

const {
  Footer, Content,
} = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
       <Layout className="layout">
          <HeaderMenu />
          <Content className="mainContent-outer">
            <div className="mainContent">
              <ListMovies title="Trending This Week"/>
              <ListMovies title="Popular"/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Movies App ©2019 Created by Amit Patil
          </Footer>
        </Layout>,     
      </div>
    );
  }
}

export default App;
