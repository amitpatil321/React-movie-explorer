import React, { Component } from 'react';
import { Menu, Layout } from 'antd';
import SearchMovies from '../SearchMovies/SearchMovies';
const { Header } = Layout;

// const Search        = Input.Search;

class HeaderMenu extends Component {
    state = {
      
    }

    render() {
      const { dataSource } = this.state;
      return (
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="home">Home</Menu.Item>
            <Menu.Item key="trending">Trending</Menu.Item>
            <Menu.Item key="popular">Popular</Menu.Item>
            <Menu.Item key="search" disabled>
              {/* <Search
                placeholder="Search..."
                onSearch={value => this._onSearch(value)}
                style={{ width: 200 }}
              />*/}
              <SearchMovies />
            </Menu.Item>
          </Menu>
        </Header>        
      )
    }
}  

export default HeaderMenu;