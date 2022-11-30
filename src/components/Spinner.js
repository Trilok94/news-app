import React, { Component } from 'react'

import '../Spinner.css';

export default class Spinner extends Component {
  render() {
    return (<>
    <div className="container d-flex justify-content-center">
      <div className="lds-ellipsis ">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      </div>
    </>
    )
  }
}
