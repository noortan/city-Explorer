import React, { Component } from 'react'
import { Col } from 'react-bootstrap';
import Movie from './Movie';
class Movies extends Component {
    
    render() { 
        return ( 
            <Col >
            <Movie 
            released_on={this.props.released_on}
            image_url={this.props.image_url}
            title={this.props.title}
            total_votes ={this.props.total_votes}
            average_votes = {this.props.average_votes}
            overview ={this.props.overview}
            />
            </Col>
         );
    }
}
 
export default Movies 