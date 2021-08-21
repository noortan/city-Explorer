import React, { Component } from 'react'
import { Col } from 'react-bootstrap';
import WeatherDay from './WeatherDay';

class Weather extends Component {
    
    render() {
        return (
            <Col >
                <WeatherDay
                    date={this.props.date}
                    description={this.props.description}
                />
            </Col>
        );
    }
}

 
export default Weather 