import React, { Component } from "react";
import PropTypes from "prop-types";

class OwnerInfo extends Component {
  render() {
    return (
      <div>
        <label htmlFor="">name</label>
        <input
          type="text"
          value={this.props.OwnerObj.name}
          onChange={e => {
            this.props.nameEdit(e.target.value);
          }}
        />
        <label htmlFor="">email</label>
        <input
          type="text"
          value={this.props.OwnerObj.email}
          onChange={e => {
            this.props.emailEdit(e.target.value);
          }}
        />
        <label htmlFor="">tel</label>
        <input
          type="number"
          value={this.props.OwnerObj.tel}
          onChange={e => {
            this.props.telEdit(e.target.value);
          }}
        />
      </div>
    );
  }
}
OwnerInfo.propTypes = {
  OwnerObj: PropTypes.object,
  nameEdit: PropTypes.func,
  emailEdit: PropTypes.func,
  telEdit: PropTypes.func
};
export default OwnerInfo;
