import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import './PropertiesDetail.scss'
class PropertiesDetail extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className="row details-Container">
                {this.props.properties && this.props.properties.map((data, key) => {
                    return (
                        <div key={key} className="card mb-3">
                            <img className="card-img-top"  src={`http://placeimg.com/640/480/arch/${data.id}`} data-holder-rendered="true" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                <Link to={{pathname:"/detail",state:{idProperty:data.id}}}>Ver detalles...</Link>
                            </div>
                           
                            
                        </div>
                    )
                })}


            </div>


        )
    }
}


PropertiesDetail.propTypes = {
    properties: PropTypes.array.isRequired,
}
export default PropertiesDetail
