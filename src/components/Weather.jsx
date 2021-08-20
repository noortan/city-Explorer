import React, { Component } from 'react'

export class Weather extends Component {
    render() {
        return (
            <div>
                {this.props.description}
                {}
            </div>
        )
    }
}

export default Weather
