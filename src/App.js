//import logo from './logo.svg';
import './App.css';
import './home.css';

//import Sonet from './Sonet';
//import Greetings from './Greetings';
import BookList from './BookList';

import 'bootstrap/dist/css/bootstrap.min.css';

import axios from "axios";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// nav bars
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//import NavDropdown from 'react-bootstrap/NavDropdown';

// forms
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

// card
//import Card from 'react-bootstrap/Card';
//import CardGroup from 'react-bootstrap/CardGroup';
import { Component } from 'react';
//import Col from 'react-bootstrap/Col';

import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
//import FloatingLabel from 'react-bootstrap/FloatingLabel';

// react bootstrap icons
import * as Icon from 'react-bootstrap-icons';

// tabs
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      isToggleOn: true
    };
    this.handleClick = this.handleClick.bind(this);

  }

  async handleClick (){
    //document.getElementById("movieinfo").style.display="block";
    console.log('clicked');
    const response = await axios.get("https://dog.ceo/api/breeds/list/all");
    console.log(response.data);
  }

  render(){
    return (
      /*
      <div className="App">
        <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
           <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
          <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success" onClick={this.handleClick}>Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

<div id="movieinfo">
<CardGroup>
  <Card>
    <Card.Body>
      <Card.Title>
        <Button variant="outline-success" onClick={this.handleClick}>Action</Button> &nbsp;
        <Button variant="outline-success" onClick={this.handleClick}>Thriller</Button>
      </Card.Title>
      <Card.Text>
        <div className="form-group form-inline border-line-bottom">
          <label>A gunman for hire is framed for murder, and assumes a dead man's identity while hiding from the police</label>
        </div>
        <div className="form-group form-inline border-line-bottom">
          <label>Director</label>
          <label>Trivikram Srinivas</label>
        </div>
        <div className="form-group form-inline border-line-bottom">
          <label>Writer</label>
          <label>Trivikram Srinivas</label>
        </div>
        <div className="form-group form-inline border-line-bottom">
          <label>Stars</label>
          <label>Mahesh Babu</label>
          <label>Trisha Krishnan</label>
          <label>Prakash Raj</label>
        </div>
        
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
</div>
      </div>

    ); */
    <div>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        {/*<Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Twitter</Nav.Link>
            {/*
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled> Link</Nav.Link> */}
          </Nav>
          
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
    <Icon.FilePersonFill className='rounded'/>
  </Container>
</Navbar>
<Row>
  <Col>
  <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/home">File A Complaint<Icon.ArrowBarRight/></Nav.Link>
          <Nav.Link eventKey="link-1">Dispute Transaction<Icon.Activity/></Nav.Link>
          <Nav.Link eventKey="link-2">General Service Request<Icon.Alarm/></Nav.Link>
          <Nav.Link eventKey="link-2">Update Contact Profile<Icon.AlignBottom></Icon.AlignBottom></Nav.Link>
          <Nav.Link eventKey="link-2">Bankruptacy<Icon.AlignCenter></Icon.AlignCenter></Nav.Link>
          <Nav.Link eventKey="link-2">My Cases<Icon.Wordpress></Icon.Wordpress></Nav.Link>
          
        </Nav>
  </Col>
  <Col xs={10}>
  <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home">
          <br></br>
          <ListGroup>
            <Form>
              <Row>
                <Col><BookList/></Col>
                <Col><BookList/></Col>
                <Col><BookList/></Col>
                <Col><BookList/></Col>
                <Col><BookList/></Col>
                <Col><BookList/></Col>
                <Col><BookList/></Col>
                <Col><BookList/></Col>
              </Row>
              <Row>
                <Col xs={3}>
                  <Form.Control as="textarea" placeholder="Comments" className="mb-3"/>
                </Col>
              </Row>
              <Row>
                <Col xs={3}>
                <Form.Group controlId="formFileLg" className="mb-3">
                  <Form.Control type="file" />
                 </Form.Group>
                 </Col>
              </Row>
              <Row>
                <Col><Button variant="outline-primary" onClick={this.handleClick} size="sm" className="mb-3">Post</Button></Col>
              </Row>
            </Form>
          </ListGroup>
        </Tab>
        <Tab eventKey="profile" title="Profile">
        <ListGroup>
          <ListGroup.Item>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </ListGroup.Item>
          <ListGroup.Item>
          <Form>
            <Row>
              <Col>
              <Form.Control as="textarea" placeholder="Comments" className="mb-3"/>
              </Col>
            </Row>
            <Row>
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Control type="file" />
            </Form.Group>
            </Row>
            <Row>
              <Button variant="outline-primary" onClick={this.handleClick} size="sm" className="mb-3">Post</Button>
            </Row>
          </Form>
          </ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
  </Tab>
  <Tab eventKey="contact" title="Contact">
  <ListGroup>
          <ListGroup.Item>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
          </InputGroup>
          </ListGroup.Item>
          <ListGroup.Item>
          <Form>
            <Row>
              <Col>
              <Form.Control as="textarea" placeholder="Comments" className="mb-3"/>
              </Col>
            </Row>
            <Row>
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Control type="file" />
            </Form.Group>
            </Row>
            <Row>
              <Button variant="outline-primary" onClick={this.handleClick} size="sm" className="mb-3">Post</Button>
            </Row>
          </Form>
          </ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
  </Tab>
</Tabs>
  </Col>
</Row>
{/*
      <Container className='container-home'>
      
      <Row>
        <Col>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/home">File A Complaint</Nav.Link>
          <Nav.Link eventKey="link-1">Dispute Transaction</Nav.Link>
          <Nav.Link eventKey="link-2">General Service Request</Nav.Link>
          <Nav.Link eventKey="link-2">Update Contact Profile</Nav.Link>
          <Nav.Link eventKey="link-2">Bankruptacy</Nav.Link>
          <Nav.Link eventKey="link-2">My Cases</Nav.Link>
          <Nav.Link eventKey="disabled" disabled> Disabled </Nav.Link>
        </Nav>
      </Col>
      <Col xs={8} className='col-content'>
      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="home" title="Home">
          <ListGroup>
            <Form>
              <Row>
                <Col><BookList/></Col>
              </Row>
              <Row>
                <Col>
                  <Form.Control as="textarea" placeholder="Comments" className="mb-3"/>
                </Col>
              </Row>
              <Row>
                <Form.Group controlId="formFileLg" className="mb-3">
                  <Form.Control type="file" />
                 </Form.Group>
              </Row>
              <Row>
                <Button variant="outline-primary" onClick={this.handleClick} size="sm" className="mb-3">Post</Button>
              </Row>
            </Form>
          </ListGroup>
        </Tab>
        <Tab eventKey="profile" title="Profile">
        <ListGroup>
          <ListGroup.Item>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </ListGroup.Item>
          <ListGroup.Item>
          <Form>
            <Row>
              <Col>
              <Form.Control as="textarea" placeholder="Comments" className="mb-3"/>
              </Col>
            </Row>
            <Row>
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Control type="file" />
            </Form.Group>
            </Row>
            <Row>
              <Button variant="outline-primary" onClick={this.handleClick} size="sm" className="mb-3">Post</Button>
            </Row>
          </Form>
          </ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
  </Tab>
  <Tab eventKey="contact" title="Contact">
  <ListGroup>
          <ListGroup.Item>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
          </InputGroup>
          </ListGroup.Item>
          <ListGroup.Item>
          <Form>
            <Row>
              <Col>
              <Form.Control as="textarea" placeholder="Comments" className="mb-3"/>
              </Col>
            </Row>
            <Row>
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Control type="file" />
            </Form.Group>
            </Row>
            <Row>
              <Button variant="outline-primary" onClick={this.handleClick} size="sm" className="mb-3">Post</Button>
            </Row>
          </Form>
          </ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
  </Tab>
</Tabs>
        
        </Col>
        
      </Row>
      </Container> */}
    </div>
    );
  }
}

/*

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
           <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
          <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

<div id="movieinfo">
<CardGroup>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
</div>
</div>
  );
} */

export default App;
