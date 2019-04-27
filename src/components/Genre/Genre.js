import React, { Component } from 'react';
import ListMovies from '../ListMovies/ListMovies';
import BottomScrollListener from 'react-bottom-scroll-listener';

import { Capitalize } from '../Utils/Utils'
class Genre extends Component {
    state = {
        page : 1
    }
    _toBottom = () => {
        let page = this.state.page;
        this.setState({ page: page + 1 });
    }
    render() {
        // console.log(this.props.match.params.id);
        return (
            <div className="mainContent" id="mainContent">
                <h2>{Capitalize(this.props.match.params.name)}</h2>
                <ListMovies type="genre" id={this.props.match.params.id} page={this.state.page}/>
                <BottomScrollListener onBottom={this._toBottom} offset={10} />
            </div>
        );
    }
}

export default Genre;