import React, { Component } from 'react';
import axios from 'axios';
import { Container, Col, Row, Card,Alert} from 'react-bootstrap';
import Header from './Header';
import Weather from './Weather';
class Main extends Component {
    constructor() {
        super()
        this.state = {
            strQuery: '',
            cityData: [],
            catchErr: false,
            errMsg: '',
            weatherData: [],
            showMap: false,
        }
    }

    handleSearch = async (e) => {
        e.preventDefault();
        await this.setState({
            strQuery: e.target.searchCity.value
        })
        // console.log(this.state.strQuery)

        let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.strQuery}&format=json`;

        try {
            let locationData = await axios.get(url)
            await this.setState({
                cityData: locationData.data[0],
                catchErr: false,
            });
            this.getweather(locationData.data[0].display_name)
            console.log(this.state.cityData);
        } catch (e) {
            await this.setState({
                catchErr: true,
                errMsg:'the location not fuond ',
            });
        }

    }
    getWeather = async (city) => {
        let cityName = city.split(',')[0];
        let url = `${process.env.REACT_APP_LOCALHOST}/weather/${cityName}`;
        console.log(url);
        try {
            let wData = await axios.get(url);

            await this.setState({
                weatherData: wData.data,
            });
            // console.log(this.state.weatherData);
        } catch (error) {
             this.setState({
                errMsg: `${error.response.status} | The weather for given location NOT FOUND`,
                catchErr: true,
                weatherData: [],
            });
            // console.log(this.state.errMsg);
        }
    };
    
    render() {
        return (
            <>
                <Header handleSearch={this.handleSearch} />
                <Container fluid>
                    <Row className="justify-content-center m-3">
                        {this.state.catchErr && <Alert  variant='secondary'>
                           [{this.state.errMsg.response.status}] | The location NOT FOUND
                        </Alert>}
                    </Row>
                    <Row className="justify-content-center m-3">
                        <Col sm='6'>
                            <Card  className='m-3'>
                                <Card.Header>
                                    City Name :  {this.state.cityData.display_name}
                                </Card.Header>
                                <Card.Body>
                                    <Card.Img
                                        src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=16`} />
                                    <Card.Text>
                                        longitude:  {this.state.cityData.lon}
                                    </Card.Text>
                                    <Card.Text>
                                        latitude: {this.state.cityData.lat}
                                    </Card.Text>
                                </Card.Body>

                            </Card>
                        </Col>
                       
                    </Row>
                    <Row></Row>
                </Container>
            </>
        );
    }
}

export default Main;