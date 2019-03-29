import React, { Component } from "react";
import PropTypes from "prop-types";

class Address extends Component {
  static propTypes = {};
  render() {
    return (
      <div>
        <label htmlFor="">Calle</label>
        <input
          type="text"
          name="street"
          placeholder="Editar la calle"
          value={this.props.AddressObj.street}
          onChange={e => {
            this.props.streetEdit(e.target.value);
          }}
        />
        <label htmlFor="">Pais</label>
        <input
          type="text"
          name="country"
          placeholder="Editar el pais"
          value={this.props.AddressObj.country}
          onChange={e => {
            this.props.countryEdit(e.target.value);
          }}
        />
        <label htmlFor="">Condado</label>
        <input
          type="text"
          name="county"
          placeholder="Editar el Condado"
          value={this.props.AddressObj.county}
          onChange={e => {
            this.props.countyEdit(e.target.value);
          }}
        />
        <label htmlFor="">Estado</label>
        <input
          type="text"
          name="state"
          placeholder="Editar el estado"
          value={this.props.AddressObj.state}
          onChange={e => {
            this.props.stateEdit(e.target.value);
          }}
        />
        <label htmlFor="">Ciudad</label>
        <input
          type="text"
          name="city"
          placeholder="Editar la ciudad"
          value={this.props.AddressObj.city}
          onChange={e => {
            this.props.cityEdit(e.target.value);
          }}
        />
      </div>
    );
  }
}
Address.propTypes = {
  AddressObj: PropTypes.obj,
  streetEdit: PropTypes.func,
  countryEdit: PropTypes.func,
  countyEdit: PropTypes.func,
  stateEdit: PropTypes.func,
  cityEdit: PropTypes.func
};
export default Address;
