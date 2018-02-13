import React, { Component } from "react";
import { connect } from "react-redux";
require("./loader.scss");

class Loader extends Component {
  constructor(props) {
    super(props);
    console.log("inComponent", this.props.isLoading);
  }

  render() {
    return (
      <div className="wrapper" style={{display: this.props.isLoading ? 'block' : 'none'}}>
        <div className="head">
          <div className="topHead">
            <div className="eye1">
                <div className='black'/>
            </div>
            <div className="eye2">
                <div className='black'/>
            </div>
          </div>
          <div className="mouth" />
        </div>
      </div>
    );
  }
}

export default connect(
    state => {
        return {
            isLoading: state.loading 
        }
    }, dispatch => ({}))(Loader);
