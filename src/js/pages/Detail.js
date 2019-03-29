import React, { Component } from "react";
import PropTypes from "prop-types";
import StepperComponent from "./../components/Stepper";
import {
  setOwnInfo,
  setPlaceInfo,
  setPriceInfo
} from "./../actions/primaryActions";
import { connect } from "react-redux";
import "./Detail.scss";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
class Detail extends Component {
  constructor(context, props) {
    super(context, props);
    this.state = {
      idProperty: this.props.location.state.idProperty,
      activateStepper: false,
      redirectTo: false
    };
  }
  componentDidMount() {
    this.setState({ idProperty: this.props.location.state.idProperty });
  }
  getItemById(idTofound, listOfObjects) {
    const filteredObj = listOfObjects.filter(objectFound => {
      return objectFound.id == idTofound;
    });

    return filteredObj;
  }
  updateData(data) {
    const { dispatch } = this.props;
    dispatch(setOwnInfo(data.owner, data.id));
    dispatch(setPlaceInfo(data.place, data.id));
    dispatch(setPriceInfo(data.price, data.id));
    this.setState({ redirectTo: true });
  }
  render() {
    const { properties } = this.props;
    const { idProperty } = this.state;
    const { dispatch } = this.props;
    return (
      <div className="col-12 detail-container">
        {this.state.redirectTo && (
          <Redirect
            to={{
              pathname: "/"
            }}
          />
        )}
        {idProperty &&
          this.getItemById(idProperty, properties).map((data, key) => {
            return (
              <div key={key} className="col-12">
                <button
                  onClick={() => {
                    this.setState({
                      activateStepper: !this.state.activateStepper
                    });
                  }}
                >
                  {this.state.activateStepper
                    ? "Ocultar Edicion"
                    : "Activar Edicion"}
                </button>
                {this.state.activateStepper ? (
                  <StepperComponent
                    objectDetail={data}
                    sendData={e => {
                      this.updateData(e);
                    }}
                  />
                ) : (
                  <div>
                    <h1>{data.title}</h1>
                    <label htmlFor="">Descripcion:</label>
                    <h2>{data.description}</h2>
                    <label htmlFor="">Precio:</label>
                    <h3>${data.price} mxn</h3>
                    <hr />
                    <h1>Datos del dueño</h1>
                    <label htmlFor="">Nombre:</label>
                    <label htmlFor="">{data.owner.name}</label>
                    <label htmlFor="">Correo:</label>
                    <a href={`mailto:${data.owner.email}`} target="_top">
                      {data.owner.email}
                    </a>
                    <label htmlFor="">Telefono:</label>
                    <a href={`tel:${data.owner.tel}`} target="_top">
                      {data.owner.tel}
                    </a>
                    <hr />
                    <h1>Direccion</h1>
                    <label htmlFor="">Calle:</label>
                    <label htmlFor="">{data.place.street}</label>
                    <label htmlFor="">Ciudad:</label>
                    <label htmlFor="">{data.place.city}</label>
                    <label htmlFor="">Estado:</label>
                    <label htmlFor="">{data.place.state}</label>
                    <label htmlFor="">Pais:</label>
                    <label htmlFor="">{data.place.country}</label>
                    <label htmlFor="">Condado:</label>
                    <label htmlFor="">{data.place.county}</label>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    );
  }
}

export default connect(state => {
  return {
    properties: state.primaryData.data.properties
  };
})(Detail);
