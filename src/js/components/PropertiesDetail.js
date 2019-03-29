import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./PropertiesDetail.scss";
class PropertiesDetail extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="row details-Container">
        {this.props.properties &&
          this.props.properties.map((data, key) => {
            return (
              <div key={key} className="card mb-3">
                <img
                  className="card-img-top"
                  src={data.image}
                  data-holder-rendered="true"
                />
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description}</p>
                  <p className="card-text">
                    <small className="text-muted">${data.price}</small>
                  </p>
                  <Link
                    to={{ pathname: "/detail", state: { idProperty: data.id } }}
                  >
                    Ver detalles...
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

PropertiesDetail.propTypes = {
  properties: PropTypes.array.isRequired
};
export default PropertiesDetail;
