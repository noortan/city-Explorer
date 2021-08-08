import React, { Component } from 'react'
import { Navbar, Container, Nav, InputGroup, Button, FormControl,Form, Row } from 'react-bootstrap';
class Header extends Component {

    render() {
        return (<header>
            <Navbar bg="secondary " expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#home"><h2 className='text-light'>City Explorer</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='text-light' />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto">
                        </Nav>
                        <Row >
                        <Form onSubmit={this.props.handleSearch} className='d-flex'>
                            <InputGroup className="m-3">
                                <Button  type='submit' variant="outline-light" id="button-addon1">
                                    Explore!
                                </Button>
                                <FormControl
                                    placeholder='Enter a City Name'
                                    aria-label="City Name"
                                    aria-describedby="basic-addon1"
                                    name='searchCity'
                                />
                            </InputGroup>
                            </Form>
                        </Row>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>);
    }
}

export default Header;
