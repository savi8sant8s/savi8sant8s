import { Component } from "react";
import { 
  Button,
  Accordion, 
  Card, 
  Nav, 
  Image, 
  Container, 
  Row, 
  Col
} from "react-bootstrap";
import TextAnimation from 'react-animate-text';
import { Github, Linkedin} from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
  background: "linear-gradient(#141e30, #243b55)",
  minHeight: "100vh",
};

class Menu extends Component {
  render(){
    return (
      <Nav as="ul" className="justify-content-end">
        <Nav.Item as="li">
          <Nav.Link href="https://github.com/savi8sant8s" target="_blank"><Github color="#FF7F50" /></Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="https://www.linkedin.com/in/savi8sant8s" target="_blank"><Linkedin color="#FF7F50" /></Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="https://dev.to/savi8sant8s" target="_blank"><p style={{ color: "#FF7F50" }}>Dev.to</p></Nav.Link>
        </Nav.Item>
      </Nav>
    )
  }
}

class Title extends Component {
  render() {
    return (
      <div style={{textAlign: "center", color: "#FF7F50" }}>
        <TextAnimation charInterval={this.props.interval}>
          <p className={this.props.class}>{this.props.value}</p>
        </TextAnimation>
      </div>
    )
  }
}

class AboutMe extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm={6}>
              <Title value="Sobre mim:" class="h6" interval="50" />
              <Card bg="secondary" border="warning">
                <Card.Body style={{ textAlign: "justify", color: "white" }}>
                        <p>Sou um passageiro que visitou os games de PS2,
                        Super Nintendo e jogos JAR no celular de botão e descobriu
                        que a mágica que dava vida a eles é uma interessante empreitada.</p>
                        <p>Utilizador Linux por necessidade e depois por curiosidade, gosto e
                        fico vislumbrado em ver e fazer códigos simples e com poucos
                        recursos, mas com grandes poderes, tentando ter como motivação
                        a engenharia feita em Super Mario e outros jogos antigos que
                        faziam milagres em kbytes de armazenamento.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}>
              <Title value="Habilidades:" class="h6" interval="50" />
              <Card bg="secondary" border="warning">
                <Card.Body style={{ textAlign: "justify", color: "white" }}>
                <p><strong>Graduação: </strong>Técnico em Desenvolvimento de Sistemas e estudante de Bacharelado em Eng. de Software.</p>
                  <p><strong>Tecnologias que domino: </strong>Ionic/Angular, Python, SQL, React, Linux e Express.</p>
                  <p><strong>Tecnologias que já tive contato: </strong>C, Java, Docker, Rust e Haskell.</p>
                  <p><strong>Habilidades interperssoais: </strong>autodidata, trabalho colaborativo, pontualidade e atitude.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

class PersonalProjects extends Component {
  render(){
    return (
      <div>
        <h3>
          <TextAnimation charInterval={50}>
            <Title value="Pessoal:" class="h6" interval="100" />
          </TextAnimation>
        </h3>
        <Accordion style={{ color: 'white' }}>
          <Card bg="secondary" border="warning">
            <Card.Header>
              <Accordion.Toggle style={{ color: 'yellow' }} as={Button} variant="link" eventKey="0">
                <Image width="50px" src="https://www.flaticon.com/svg/vstatic/svg/919/919850.svg?token=exp=1620591120~hmac=f1b949c7a03aad066b08866a6902e3c9" roundedCircle />
                Gerador de competições de futebol
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body style={{ textAlign: "justify" }}>
                <p>Código-fonte: <a href="https://github.com/savi8sant8s/gerador-competicao-futebol" style={{ color: "yellow" }} target="_blank"> clique aqui.</a></p>
                    API construída com Haskell que gera tabelas de futebol.
                    Permite gerar tabelas de competições de eliminatórias, 
                    fase de grupos e pontos corridos, possibilitando ainda
                    sortear os times ou ter partidas de ida e volta.
                    </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card bg="secondary" border="warning">
            <Card.Header>
              <Accordion.Toggle style={{ color: 'yellow' }} as={Button} variant="link" eventKey="1">
                <Image width="50px" src="https://www.pngfind.com/pngs/m/685-6854994_react-logo-no-background-hd-png-download.png" roundedCircle />
                Crie um Card Game
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body style={{ textAlign: "justify" }}>
              <p>Website: <a href="https://crieumcardgame.vercel.app/" style={{ color: "yellow" }} target="_blank"> clique aqui.</a></p>
                <p>Código-fonte: <a href="https://github.com/savi8sant8s/crie-um-card-game" style={{ color: "yellow" }} target="_blank"> clique aqui.</a></p>
                    Site para criar e baixar um card game customizado.
                    Possi 2 modelos: um modelo de card game comum e
                    um modelo de card game de cartas de baralho.
                    </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card bg="secondary" border="warning">
            <Card.Header>
              <Accordion.Toggle style={{ color: 'yellow' }} as={Button} variant="link" eventKey="2">
                <Image style={{ background: "white" }} width="50px" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" roundedCircle />
                    Mais projetos
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body style={{ textAlign: "justify" }}>
                <p>Github: <a href="https://github.com/savi8sant8s" style={{ color: "yellow" }} target="_blank"> clique aqui.</a></p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    )
  }
}

class RebaseProjects extends Component {
  render(){
    return (
      <div>
        <h3>
          <TextAnimation charInterval={50}>
            <Title value="Rebase Team:" class="h6" interval="100" />
          </TextAnimation>
        </h3>
        <Accordion style={{ color: 'white' }}>
          <Card bg="secondary" border="warning">
            <Card.Header>
              <Accordion.Toggle style={{ color: 'yellow' }} as={Button} variant="link" eventKey="0">
                <Image width="50px" src="https://play-lh.googleusercontent.com/OHuM2_zXDooZgnPokyvt_odffMKBGGmjTs25emLvbCGMupPdBsCZ9oOjAwahf-oVRYo=s180-rw" roundedCircle />
                Zona Azul Garanhuns Informativo
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body style={{ textAlign: "justify" }}>
                <p>Disponível na Play Store: <a href="https://play.google.com/store/apps/details?id=com.amstt.zagi" style={{ color: "yellow" }} target="_blank"> clique aqui.</a></p>
                    Esse aplicativo é um projeto da Autarquia Municipal de Segurança,
                    Trânsito e Transporte (AMSTT), visando modernizar o sistema vigente
                    do estacionamento rotativo. Nessa primeira fase você poderá ter o
                    conhecimento sobre várias informações relacionadas a Zona Azul/Marrom,
                    tais como: preços, pontos de estacionamento, horários de funcionamentos
                    e mu⁫ito mais.
                    </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card bg="secondary" border="warning">
            <Card.Header>
              <Accordion.Toggle style={{ color: 'yellow' }} as={Button} variant="link" eventKey="1">
                <Image width="50px" src="https://play-lh.googleusercontent.com/aqYpQIpe0HPyOkB9t-JplmOcT4ZrIoZOihQi5TWMLpCZASQuAQ3ol58NtZri3LesSlM=s180-rw" roundedCircle />
                   Aplicativo UPE Plus
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body style={{ textAlign: "justify" }}>
                <p>Disponível na Play Store: <a href="https://play.google.com/store/apps/details?id=com.rebase.alunoupe" style={{ color: "yellow" }} target="_blank"> clique aqui.</a></p>
                    Aplicativo voltado para os estudantes, professores, gestores e demais
                    integrantes da Universidade visando controlar o fluxo de pessoas nas
                    dependências dos campus - Garanhuns, Salgueiro, Arcoverde e Serra Talhada.
                    </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card bg="secondary" border="warning">
            <Card.Header>
              <Accordion.Toggle style={{ color: 'yellow' }} as={Button} variant="link" eventKey="2">
                <Image width="50px" style={{ background: "white" }} width="50px" src="https://camo.githubusercontent.com/260de492f3382fdaa0ce3d8b23eb7871e5b8b15c9b998a7ea7be42a7425589da/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3731333339313737373737313638333939302f3731393630363435303832303837343234302f49434f4e5f636f7069612e706e673f77696474683d343032266865696768743d343032" roundedCircle />
                Garanhuns X Covid-19
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body style={{ textAlign: "justify" }}>
                <p>Código-fonte: <a href="https://github.com/Rebase-team/Guns-x-Covid" style={{ color: "yellow" }} target="_blank"> clique aqui.</a></p>
                    O aplicativo visa engajar a sociedade a contribuir com
                    o bem-estar da cidade de Garanhuns, nesse tempo de
                    pandemia do coronavírus.
                    <p>Notícia no G1: <a href="https://g1.globo.com/pe/caruaru-regiao/noticia/2020/06/23/estudantes-da-upe-garanhuns-desenvolvem-aplicativo-para-informar-sobre-aglomeracoes.ghtml" style={{ color: "yellow" }} target="_blank"> clique aqui.</a></p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    )
  }
}

class Projects extends Component {
  render(){
    return (
      <div className="p-3">
        <h1>
          <TextAnimation charInterval={100}>
            <Title value="Projetos" class="h3" interval="100" />
          </TextAnimation>
        </h1>
        <Container>
          <Row>
            <Col sm={6}>
              <RebaseProjects />
            </Col>
            <Col sm={6}>
              <PersonalProjects />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <div style={styles}>
        <Menu />
        <Title value="Sávio Santos" class="h1" interval="100" />
        <div style={{ textAlign: "center" }}>
          <Image width="200px" src="https://avatars.githubusercontent.com/u/50780673?v=4" roundedCircle />
        </div>
        <AboutMe />
        <Projects />
      </div>
    )
  }
}