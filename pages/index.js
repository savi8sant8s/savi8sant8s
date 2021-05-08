import { Component } from "react";
import { Button, Accordion, Card, Nav, Image, Container, Row, Col } from "react-bootstrap";
import TextAnimation from 'react-animate-text';

import 'bootstrap/dist/css/bootstrap.min.css';

class Menu extends Component {
  render(){
    return (
      <Nav defaultActiveKey="/home" as="ul" className="justify-content-end">
        <Nav.Item as="li">
          <Nav.Link href="/home">Github</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link >Dev.to</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link >Linkedin</Nav.Link>
        </Nav.Item>
      </Nav>
    )
  } 
}

class Title extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <TextAnimation charInterval={this.props.interval}>
          <p className={this.props.class}>{this.props.value}</p>
        </TextAnimation>
      </div>
    )
  }
}

class Text extends Component {
  render() {
    return (
      <TextAnimation charInterval={this.props.interval}>
        <p>{this.props.value}</p>
      </TextAnimation>
    )
  }
}

class AboutMe extends Component {
  render(){
    return (
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <Image width="200px" src="https://avatars.githubusercontent.com/u/50780673?v=4" roundedCircle />
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <Title value="Sobre mim" class="h6" interval="50" />
            <Card>
              <Card.Body>
              <Text value="cskjfjkshfkghkgssggm" interval="50" />
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6}>
            <Title value="Skills" class="h6" interval="50" />
            <Card>
              <Card.Body>
              <Text value="cskjfjkshfkghkgssggm" interval="50" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

function Projects() {
  return (
    <div className="p-3">
      <h1 className="d-flex justify-content-center">
        <TextAnimation charInterval={100}>Projetos</TextAnimation>
      </h1>
      <Container>
        <Row>
          <Col xs={6} className="justify-content-center">
            <h3 className="d-flex justify-content-center">
              <TextAnimation charInterval={50}>Rebase Team</TextAnimation>
            </h3>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Zona Azul Garanhuns Informativo
        </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    UPE Plus
        </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Garanhuns X Covid-19
        </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
          <Col xs={6} className="justify-content-center">
            <h3 className="d-flex justify-content-center">
              <TextAnimation charInterval={50}>Pessoal</TextAnimation>
            </h3>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Gerador de Competições de Futebol
        </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Crie um Card Game
        </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Mais...
        </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Title value="Sávio Santos" class="h1" interval="100" />
        <AboutMe />
        <Projects />
      </div>
    )
  }
}