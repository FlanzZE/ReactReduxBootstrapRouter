import React, { Component } from "react";
import PropTypes from "prop-types";

class Price extends Component {
  render() {
    return (
      <div>
        <label htmlFor="">Precio</label>
        <input
          type="number"
          value={this.props.PriceObj}
          onChange={e => {
            this.props.priceEdit(e.target.value);
          }}
        />
      </div>
    );
  }
}
Price.propTypes = {
  PriceObj: PropTypes.obj,
  priceEdit: PropTypes.func
};
export default Price;
