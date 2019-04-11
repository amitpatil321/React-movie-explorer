import React, { Component } from 'react'
import { Icon, Spin, Empty } from 'antd';

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
      console.log(this.state.profile);
      return (
        <div className="mainContent" id="mainContent">
          <div className="movieDetails">
            <ProfileDetails profile={this.state.profile} />
          </div>
        </div>
      )
    }

    return (<Empty description={ "Failed to load profile! Please try again" } />);
  }
}
