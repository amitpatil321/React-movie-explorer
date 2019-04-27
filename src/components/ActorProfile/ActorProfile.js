import React, { Component } from 'react'
import { Icon, Spin, Empty, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

import Alert from '../Alert/Alert.js';
import ProfileDetails from '../ProfileDetails/ProfileDetails';
import * as CONFIG from '../../config/config';
import PeopleAPI from '../../API/PeopleAPI';

const antIcon = <Icon type="loading" spin />;

export default class ActorProfile extends Component {
  state = {
    loading : false
  }

  componentDidMount(){
    if(this.props.match.params.id){
      this.setState({ loading : true })

      PeopleAPI.profile(this.props.match.params.id).then(response => {
        this.setState({ profile : response, loading : false })
      }).catch((error) => {
        let errorBox = <Alert type="error" message={error.toString()} />
        this.setState({ error : errorBox, profile : null, loading : false })
      });

    }else // If id isnt provided then, redirect to home
      this.props.history.push(CONFIG.ROUTES.HOME)
  }

  render() {
    // Handle error and show error message
    if(this.state.error != null)
      return this.state.error;

    if(this.state.loading)
        return (<Spin indicator={antIcon}></Spin>);

    if(this.state.profile && !this.state.loading){
      let movie_name = '';
      if(this.props.location.state && this.props.location.state.movie_name)
        movie_name = this.props.location.state.movie_name;

      return (
        <div className="mainContent" id="mainContent">
          <Breadcrumb>
              <Breadcrumb.Item key="home">
                  <Link to="/"><Icon type="home" /> Home</Link>
              </Breadcrumb.Item>
              {(movie_name.length) ?
                <Breadcrumb.Item key="Movie Details">
                <a href="javascript:;" onClick={() => this.props.history.goBack()} alt={movie_name}>{movie_name}</a>
                </Breadcrumb.Item>
              : '' }
              <Breadcrumb.Item>
                {this.state.profile.name}
              </Breadcrumb.Item>
          </Breadcrumb>

          <div className="actorDetails">
            <ProfileDetails profile={this.state.profile} />
          </div>
        </div>
      )
    }

    return (<Empty description={ "Failed to load profile! Please try again" } />);
  }
}
