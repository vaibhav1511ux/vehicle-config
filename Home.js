import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'
class Home extends React.Component {
    render() {
       return (
       <container>
        <div className="Container coverimg">
          <Carousel >
            <Carousel.Item interval={4000}>
              <img
                className="d-block w-100 carouselimg" id="cover"
                src="https://www.hdcarwallpapers.com/walls/2014_bugatti_veyron_ettore_bugatti_legend_edition-wide.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h1 className=" coverheading" >G1ViTA VECHICLE CONFIG</h1>
                <h4 className=" covertext">Config as you Want</h4>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000} >
              <img
                className="d-block w-100" id="cover"
                src="https://images.pexels.com/photos/3849554/pexels-photo-3849554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h1 className=" coverheading" style={{ color: "lightred" }} >G1ViTA VECHICLE CONFIG</h1>
                <h4 className=" covertext">Config as you Want</h4>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <img
                className="d-block w-100" id="cover"
                src="https://www.hdcarwallpapers.com/walls/bugatti_divo_in_paris-HD.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h1 className=" coverheading" style={{ color: "lightred" }} >G1ViTA VECHICLE CONFIG</h1>
                <h4 className=" covertext">Config as you Want</h4>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>


        </div>
      </container>
       )
    }
 }export default Home;