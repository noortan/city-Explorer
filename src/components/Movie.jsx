import React, { Component } from 'react'
import { Card,Col } from 'react-bootstrap';

class Movie extends Component {
    
    render() { 
        return ( 
            <Col >
            <Card >
                <Card.Header style={{background:'#FFC107'}}>
                   <h5> {this.props.released_on}</h5>
                </Card.Header>
                
                <Card.Body>
                    <Card.Img src={this.props.image_url}/>
                   <h3> {this.props.title} </h3>
                    <Card.Text>
                    {this.props.overview.substring(0,50)}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <p>
                    Total Votes : {this.props.total_votes}
                    </p>

                    <p>
                    Average Votes : {this.props.average_votes}
                    </p>
                    
                </Card.Footer>
            </Card>
            </Col>
         );
    }
}
 
export default Movie;