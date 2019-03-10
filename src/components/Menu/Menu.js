import React, { Component } from 'react';
import { Menu, Layout, Input } from 'antd';

const { Header } = Layout;
const Search        = Input.Search;

class HeaderMenu extends Component {
    state = {
      current: '1',
    }
  
    handleClick = (e) => {
      console.log('click ', e);
      this.setState({
        current: e.key,
      });
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
            <Menu.Item key="home">Home</Menu.Item>
            <Menu.Item key="trending">Trending</Menu.Item>
            <Menu.Item key="popular">Popular</Menu.Item>
            <Menu.Item key="search" disabled>
              <Search
                placeholder="Search..."
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
              />              
            </Menu.Item>
          </Menu>
        </Header>        
      )
    }
}  

export default HeaderMenu;