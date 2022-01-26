import React, { Component } from "react";
import { Row, Col, Select } from "antd";
import { map, filter, isEqual } from "lodash";
import BottomScrollListener from "react-bottom-scroll-listener";

import * as CONFIG from "../../config/config.js";
import ListMovies from "../ListMovies/ListMovies";

const Option = Select.Option;

class Discover extends Component {
  state = {
    year: "",
    sortby: "",
    genres: [],
    filters: {},
    page: 1,
  };

  componentDidMount() {
    this.setState({ filters: this._makeParams() });
  }

  // fetch results
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.year !== prevState.year ||
      this.state.sortby !== prevState.sortby ||
      !isEqual(this.state.genres.sort(), prevState.genres.sort())
    ) {
      // let params = this._makeParams();
      this.setState({ filters: this._makeParams() });
      return true;
    }
    return false;
  }

  _getYears() {
    let years = [];
    CONFIG.YEAR_FILTER.forEach((year) => {
      years.push(
        <Option value={year} key={year}>
          {year}
        </Option>
      );
    });
    return years;
  }

  _getSortBy() {
    let sortby = [];
    // Sortby
    Object.keys(CONFIG.SORTBY_FILTER).forEach((filter, key) => {
      sortby.push(
        <Option value={filter} key={filter}>
          {CONFIG.SORTBY_FILTER[filter]}
        </Option>
      );
    });
    return sortby;
  }

  _getGenres() {
    let genres = [];
    // extract only labels from array of objects
    var genresList = CONFIG.GENRE_FILTER.map((item) => item.name);
    // Exclude already selected genres
    var filteredGenres = genresList.filter(
      (existing) => !this.state.genres.includes(existing)
    );
    // List possible options
    filteredGenres.map((genre) => {
      genres.push(
        <Select.Option value={genre} key={genre}>
          {genre}
        </Select.Option>
      );
    });
    return genres;
  }

  _makeParams() {
    let urlString = {};

    if (this.state.year) urlString.primary_release_year = this.state.year;

    if (this.state.sortby) {
      switch (this.state.sortby) {
        case "pop_desc":
          urlString.sort_by = "popularity.desc";
          break;
        case "pop_asc":
          urlString.sort_by = "popularity.asc";
          break;
        case "rate_desc":
          urlString.sort_by = "vote_average.desc";
          break;
        case "rate_asc":
          urlString.sort_by = "vote_average.asc";
          break;
        default:
          return false;
      }
    }

    // Get genre ids array from labels
    if (this.state.genres.length) {
      var filtered = map(this.state.genres, (item) => {
        return filter(CONFIG.GENRE_FILTER, { name: item });
      });
      filtered = map(filtered, (item) => {
        return item[0].id;
      });
      urlString.with_genres = filtered.join(",");
    }
    return urlString;
  }

  _toBottom = () => {
    console.log("Reached bottom");
    let page = this.state.page;
    this.setState({ page: page + 1 });
  };

  render() {
    // Prepare filters
    let yearOptions = [],
      sortbyOptions = [],
      genresOptions = [];

    yearOptions = this._getYears();
    sortbyOptions = this._getSortBy();
    genresOptions = this._getGenres();

    return (
      <>
        <div className="mainContent" id="mainContent">
          <Row>
            <Col span={24}>
              <h1>Discover New Movies & TV Shows</h1>
            </Col>
            <Col span={24}>
              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <strong>Year</strong>
                  <br />
                  <Select
                    defaultValue="None"
                    onChange={(value) => this.setState({ year: value })}
                    style={{ width: "100%" }}
                  >
                    <Option value="" key="none">
                      None
                    </Option>
                    {yearOptions}
                  </Select>
                </Col>
                <Col span={8}>
                  <strong>Sort By</strong>
                  <br />
                  <Select
                    defaultValue="None"
                    onChange={(value) => this.setState({ sortby: value })}
                    style={{ width: "100%" }}
                  >
                    <Option value="" key="none">
                      None
                    </Option>
                    {sortbyOptions}
                  </Select>
                </Col>
                <Col span={8}>
                  <strong>Genres</strong>
                  <br />
                  <Select
                    showSearch
                    allowClear
                    showArrow
                    mode="multiple"
                    placeholder="Select Genres"
                    value={this.state.genres}
                    onChange={(item) => this.setState({ genres: item })}
                    style={{ width: "100%" }}
                  >
                    {genresOptions}
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <ListMovies
                    type="discover"
                    filters={this.state.filters}
                    page={this.state.page}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <BottomScrollListener onBottom={this._toBottom} offset={10} />
        </div>
      </>
    );
  }
}

export default Discover;
