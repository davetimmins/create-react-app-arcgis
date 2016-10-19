import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { createMap } from './actions/map';
import { Button } from 'react-bootstrap';

const mapStateToProps = (state) => {
  return {
    mapCtrl: state.map.mapCtrl
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createMap: (domNode) => {
      dispatch(createMap(domNode))
    }
  }
}

class App extends Component {
  componentDidMount() {
    
    if (!this.props.mapCtrl) {
      this.props.createMap(this.refs.mapView);
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2><Button bsStyle="primary">Welcome</Button> to React</h2>     
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div ref='mapView' className='map-view'></div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
