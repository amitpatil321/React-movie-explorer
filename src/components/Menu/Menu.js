import React, { Component } from 'react';
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';
import SearchMovies from '../SearchMovies/SearchMovies';
const { Header } = Layout;

// const Search        = Input.Search;

class HeaderMenu extends Component {
    state = {
      
    }

    render() {
      return (
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="home"><Link to="/">Home</Link></Menu.Item>
            <Menu.Item key="search" disabled>
              <SearchMovies />
            </Menu.Item>
          </Menu>
        </Header>        
      )
    }
}  

export default HeaderMenu;