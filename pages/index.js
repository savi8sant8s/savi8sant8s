import { Component } from "react";
import Head from "next/head";
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

const styles = {
  background: "#2c3e50",
  minHeight: "100vh",
  fontFamily: "Questrial",
  color: "white",
  textAlign: "center"
};

class Menu extends Component {
  render(){
    return (
      <Nav as="ul" className="justify-content-end">
        <Nav.Item as="li">
          <Nav.Link href="https://github.com/savi8sant8s" target="_blank"><Github color="white" /></Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="https://www.linkedin.com/in/savi8sant8s" target="_blank"><Linkedin color="white" /></Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="https://dev.to/savi8sant8s" target="_blank"><p style={{color: "white"}}>Dev.to</p></Nav.Link>
        </Nav.Item>
      </Nav>
    )
  }
}

class Title extends Component {
  render() {
    return (
        <TextAnimation charInterval={this.props.interval}>
          <p className={this.props.class_}>{this.props.value}</p>
        </TextAnimation>
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
              <Title value="Sobre mim:" class_="h5" interval="50" />
              <Card bg="dark" border="light">
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
              <Title value="Habilidades:" class_="h5" interval="50" />
              <Card bg="dark" border="light">
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
      <div style={{textAlign: "justify", color: "white"}}>
        <h3>
          <TextAnimation charInterval={50}>
            <Title value="Pessoal:" class_="h5 text-center" interval="100" />
          </TextAnimation>
        </h3>
        <Accordion>
          <Card bg="dark" border="light">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <Image width="50px" src="https://www.tabeladefutebol.com.br/logo.png" roundedCircle />
                <a className="text-light">Criador de tabelas de futebol</a>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
              <p>Website: <a href="https://www.tabeladefutebol.com.br/" style={{ color: "yellow" }} target="_blank"> clique aqui.</a></p>
                    Site para criar tabelas de futebol gratuitamente. De forma simples e rápida 
                    é possível criar tabelas de pontos corridos, fase de grupos ou mata-mata para aquele
                    torneio com os amigos, no campo, na quadra ou no videogame.
                    </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card bg="dark" border="light">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                <Image width="50px" src="https://www.pngfind.com/pngs/m/685-6854994_react-logo-no-background-hd-png-download.png" roundedCircle />
                <a className="text-light">Crie um Card Game</a>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
              <p>Website: <a href="https://crieumcardgame.vercel.app/" style={{ color: "yellow" }} target="_blank"> clique aqui.</a></p>
                <p>Código-fonte: <a href="https://github.com/savi8sant8s/crie-um-card-game" style={{ color: "yellow" }} target="_blank"> clique aqui.</a></p>
                    Site para criar e baixar um card game customizado.
                    Possi 2 modelos: um modelo de card game comum e
                    um modelo de card game de cartas de baralho.
                    </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card bg="dark" border="light">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                <Image width="50px" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" roundedCircle />
                <a className="text-light">Mais projetos</a>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
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
      <div style={{textAlign: "justify", color: "white"}}>
        <h3>
          <TextAnimation charInterval={50}>
            <Title value="Rebase Team:" class_="h5 text-center" interval="100" />
          </TextAnimation>
        </h3>
        <Accordion>
          <Card bg="dark" border="light">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <Image width="50px" src="https://play-lh.googleusercontent.com/OHuM2_zXDooZgnPokyvt_odffMKBGGmjTs25emLvbCGMupPdBsCZ9oOjAwahf-oVRYo=s180-rw" roundedCircle />
                <a className="text-light">Zona Azul Garanhuns Informativo</a>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
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
          <Card bg="dark" border="light">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                <Image width="50px" src="https://play-lh.googleusercontent.com/aqYpQIpe0HPyOkB9t-JplmOcT4ZrIoZOihQi5TWMLpCZASQuAQ3ol58NtZri3LesSlM=s180-rw" roundedCircle />
                <a className="text-light">Aplicativo UPE Plus</a>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p>Disponível na Play Store: <a href="https://play.google.com/store/apps/details?id=com.rebase.alunoupe" style={{ color: "yellow" }} target="_blank"> clique aqui.</a></p>
                    Aplicativo voltado para os estudantes, professores, gestores e demais
                    integrantes da Universidade visando controlar o fluxo de pessoas nas
                    dependências dos campus - Garanhuns, Salgueiro, Arcoverde e Serra Talhada.
                    </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card bg="dark" border="light">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                <Image width="50px" style={{ background: "white" }} width="50px" src="https://camo.githubusercontent.com/260de492f3382fdaa0ce3d8b23eb7871e5b8b15c9b998a7ea7be42a7425589da/68747470733a2f2f6d656469612e646973636f72646170702e6e65742f6174746163686d656e74732f3731333339313737373737313638333939302f3731393630363435303832303837343234302f49434f4e5f636f7069612e706e673f77696474683d343032266865696768743d343032" roundedCircle />
                <a className="text-light">Garanhuns X Covid-19</a>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
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
            <Title value="Projetos" class_="h3" interval="100" />
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
          <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="Sávio Santos" />
                <meta name="description" content="Gere tabelas de futebol para suas competições de forma fácil. O que você está esperando!?" />
                <meta name="keywords" content="software, portfolio, projetos, engenharia de software, programacao" />
                <meta name="rating" content="General" />
                <meta name="distribution" content="Global" />
                <meta name="identifier-url" content="https://saviosantos.vercel.app/" />
                <meta name="copyright" content="saviosantos.vercel.app" />
                <meta name="robots" content="index,follow" />
                <title>Sávio Santos</title>
                <link rel="shortcut icon" type="image/x-icon" href="https://avatars.githubusercontent.com/u/50780673?v=4" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Questrial" />
            </Head>
        <Menu />
        <Title value="Sávio Santos" class_="h1" interval="100" />
        <div style={{ textAlign: "center" }}>
          <Image width="200px" src="https://avatars.githubusercontent.com/u/50780673?v=4" roundedCircle />
        </div>
        <AboutMe />
        <Projects />
      </div>
    )
  }
}