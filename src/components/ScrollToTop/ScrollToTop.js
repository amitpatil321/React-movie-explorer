import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      setTimeout(() => {
        window.scroll({top: 0, left: 0, behavior: 'smooth' });
      }, 100);
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(React.memo(ScrollToTop))