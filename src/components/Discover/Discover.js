import React, { Component } from 'react'
import { Row, Col, Select } from 'antd';
import { map } from 'lodash';

import * as CONFIG from '../../config/config.js';

const Option = Select.Option;

class Discover extends Component {
  state = {
    year   : '',
    sortby : '',
    genres : []

  }

  render() {
    // Filter Years
    let yearOptions = [], sortbyOptions = [], genres=[];
    CONFIG.YEAR_FILTER.forEach((year) =>{
      yearOptions.push(<Option value={year} key={year}>{year}</Option>);
    });

    // Sortby
    Object.keys(CONFIG.SORTBY_FILTER).forEach((filter, key) => {
      sortbyOptions.push(<Option value={key} key={key}>{CONFIG.SORTBY_FILTER[filter]}</Option>)
    });

    // extract only labels from array of objects
    var genresList = CONFIG.GENRE_FILTER.map(item => item.name);

    // Exclude already selected items
    var filteredGenres = genresList.filter(existing => !this.state.genres.includes(existing))

    // List possible options
    filteredGenres.map(genre => {
      genres.push(<Select.Option value={genre} key={genre}>{genre}</Select.Option>)
    });

    return (
      <>
        <div className="mainContent" id="mainContent">
        <Row>
            <h1>Discover New Movies & TV Shows</h1>
            <Row>
                <Col span={6}>
                  Year<br/>
                  <Select defaultValue="None" onChange={(value) => this.setState({ year : value })} style={{ width: 200 }}>
                      <Option value='' key='none'>None</Option>
                      {yearOptions}
                  </Select>
                </Col>
                <Col span={6}>
                  Sort By<br/>
                  <Select defaultValue="None" onChange={(value) => this.setState({ sortby : value })} style={{ width: 200 }}>
                      <Option value='' key='none'>None</Option>
                      {sortbyOptions}
                  </Select>
                </Col>
                <Col span={6}>
                  Genres
                  <Select
                    showSearch
                    allowClear
                    showArrow
                    mode="multiple"
                    placeholder="Select Genres"
                    value={this.state.genres}
                    onChange={(item) => this.setState({ genres : item })}
                    style={{ width: '100%' }}
                  >
                  {genres}
                  </Select>
                </Col>
            </Row>
        </Row>
        </div>
      </>
    )
  }
}

export default Discover;