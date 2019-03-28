import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StepperComponent from './../components/Stepper'
import { connect } from "react-redux";

class Detail extends Component {
    constructor(context, props) {
        super(context, props);
        this.state = {
            idProperty: null
        }
    }
    componentDidMount() {
        this.setState({ idProperty: this.props.location.state.idProperty })
        console.log("founded  ", this.props.location.state.idProperty);

    }
    getItemById(idTofound, listOfObjects) {
        const filteredObj =
            listOfObjects.filter((objectFound) => {
                return objectFound.id == idTofound
            })
        console.log("Founded", filteredObj)
        return [filteredObj]
    }
    render() {
        const { properties } = this.props;
        const { idProperty } = this.state;

        return (
            <div className="row detail-container">
                {
                    idProperty && this.getItemById(idProperty, properties).map((data, key) => {
                        return (
                            <div key={key}>
                                asdasdasdasdasd
<StepperComponent />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default connect(state => {
    return {
        properties: state.primaryData.data.properties
    };
})(Detail);

