import React, { Component } from 'react'
import { Card,Col } from 'react-bootstrap';

class Weather extends Component {
    
    render() { 
        return ( 
            <Col >
            <Card className='m-2' style={{width:'12rem'}}>
                <Card.Header style={{background:'#FFC107'}}>
                    {this.props.date}
                </Card.Header>
                <Card.Body >
                    {this.props.description.includes('Scattered clouds')|| this.props.description.includes('Few clouds')?<img src='https://www.kindpng.com/picc/m/122-1227285_scattered-clouds-weather-symbol-hd-png-download.png' alt='..' width="45px"/>:<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTas2ehcpXNqPfEoAiCXHrfGJ6A7NSq4K3WsQ&usqp=CAU' alt='..' width="45px"/>}
                    <p style={{float:"right" ,fontWeight:"800",fontSize:"20px"}}>{this.props.temp}<sup>°</sup></p>
                  <Card.Text>  {this.props.description}</Card.Text>
                </Card.Body>
                
            </Card>
            </Col>
         );
    }
}
 
export default Weather;