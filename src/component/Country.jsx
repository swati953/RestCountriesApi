import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class country extends Component {
  render() {
    let {
      name,
      capital,
      region,
      subregion,
      population,
      timezones,
      borders,
      flag,
    } = this.props;
    return (
      <div style={{color:"black"}}>
        <div className="card mx-3 my-3">
          <img src={flag} className="card-img-top" alt={name} />
          <div className="card-footer header">
            <small className="text-muted">{timezones}</small>
            <small className="text-muted">{population}</small>
          </div>
          <div className="card-body">
            <div className="header">
              <h5 className="card-title">{name}</h5>
              <h5 className="card-title">{capital}</h5>
            </div>
            <div className="header">
              <h5 className="card-title">{region}</h5>
              <h5 className="card-title">{subregion}</h5>
            </div>
          </div>
          <div className="container"><b> Border:</b>  {borders+"  "}</div>
          
        {/* <div className="my-2 mx-3">
          <a className="btn btn-dark"
          href="/details"
          flag={flag}>
            view details</a>
        </div> */}
        </div>
      </div>
    );
  }
}
