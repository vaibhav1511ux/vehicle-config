import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Row, Col, Container
} from 'reactstrap';
class About extends React.Component {
    render() {
       return (
          <div>
      <div className="topbarandbg">
        <Container className="topBrands" >
          <h1 className="titlebrands">G1ViTA Team</h1>
          <br />
          <br />
          <br />
          <Row>
            <Col sm="12" md="6" lg="3">
              <Card className="wholecard" style={{ width: '100%' }} >
                <CardImg className="box" top src="https://tse3.mm.bing.net/th?id=OIP.bfB3VX-X62psWEmwP7nUAgHaEW&pid=Api&P=0&w=289&h=170" alt="Card image cap" />
                <CardBody className="cardsofbrands"  >
                  <CardTitle tag="h5">Vishal Hembade</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Software Developer</CardSubtitle>
                  <CardText><center>B.E.-Mechanical Engineering <br></br></center></CardText>
                 
                </CardBody>
              </Card>
            </Col>
            <Col sm="12" md="6" lg="3">
              <Card className="wholecard" style={{ width: '100%' }}>
                <CardImg className="box" top src="https://tse3.mm.bing.net/th?id=OIP.bfB3VX-X62psWEmwP7nUAgHaEW&pid=Api&P=0&w=289&h=170" />
                <CardBody className="cardsofbrands">
                  <CardTitle tag="h5" >Mahesh Darak</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Software Developer</CardSubtitle>
                  <CardText> <center>B.TECH.-Electrical <br></br></center></CardText>
                  
                </CardBody>
              </Card>
            </Col>
            <Col sm="12" md="6" lg="3" >
              <Card className="wholecard" style={{ width: '100%' }}>
                <CardImg className="box" top rounded src="https://tse3.mm.bing.net/th?id=OIP.bfB3VX-X62psWEmwP7nUAgHaEW&pid=Api&P=0&w=289&h=170" alt="Card image cap" rounded />
                <CardBody className="cardsofbrands">
                  <CardTitle tag="h5">Shubham Lokhande</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Software Developer</CardSubtitle>
                  <CardText><center>B.E.- Mechanical Engineering</center></CardText>
                 
                </CardBody>
              </Card>
            </Col>
            <Col sm="12" md="6" lg="3">
              <Card className="wholecard" style={{ width: '100%' }}>
                <CardImg className="box" top src="https://tse3.mm.bing.net/th?id=OIP.bfB3VX-X62psWEmwP7nUAgHaEW&pid=Api&P=0&w=289&h=170" />
                <CardBody className="cardsofbrands">
                  <CardTitle tag="h5">Prafulla Rawat</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Software Developer</CardSubtitle>
                  <CardText><center>B.E.- CSE</center></CardText>
                  
                </CardBody>
              </Card>
            </Col>
          </Row><Row>
            <Col sm="12" md="6" lg="3">
              <Card className="wholecard" style={{ width: '100%' }} >
                <CardImg className="box" top src="https://tse3.mm.bing.net/th?id=OIP.bfB3VX-X62psWEmwP7nUAgHaEW&pid=Api&P=0&w=289&h=170" alt="Card image cap" />
                <CardBody className="cardsofbrands"  >
                  <CardTitle tag="h5">Kaustubha jondhale</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Software Developer</CardSubtitle>
                  <CardText><center>B.E.- Mechanical Engineering</center></CardText>
                 
                </CardBody>
              </Card>
            </Col>
            <Col sm="12" md="6" lg="3">
              <Card className="wholecard" style={{ width: '100%' }}>
                <CardImg className="box" top src="https://tse3.mm.bing.net/th?id=OIP.bfB3VX-X62psWEmwP7nUAgHaEW&pid=Api&P=0&w=289&h=170" />
                <CardBody className="cardsofbrands">
                  <CardTitle tag="h5" >Vaibhav Mapari</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Software Developer</CardSubtitle>
                  <CardText><center>B.E.- EXTC</center></CardText>
                 
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <br />
         </div>
          </div>
       )
    }
 }export default About;