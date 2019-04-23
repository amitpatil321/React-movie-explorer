import React from 'react';
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';
import SearchMovies from '../SearchMovies/SearchMovies';

import './Menu.css'

const { Header } = Layout;

const HeaderMenu = (props) => {
      return (
        <div className="dummyHeader">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
              className="appMenu"
            >
              <Menu.Item key="home">
                <Link to="/">
                  <img alt="Logo" className="logo" src="/images/logo.png" />
                </Link>
              </Menu.Item>
              <Menu.Item key="search" disabled>
                <SearchMovies />
              </Menu.Item>
            </Menu>
          </Header>
        </div>
      )
}

export default HeaderMenu;