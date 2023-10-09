import Carousel from 'react-bootstrap/Carousel';
import image1 from "../../assets/1.avif"
import image2 from "../../assets/image2.avif"
import image3 from "../../assets/image3.avif"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './descripton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const MyCarousel = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <Container fluid>
            <Row>
              <Col><img src={image1} alt="first slide" /></Col>
              <Col>
                <p className='text-center fs-1 para'>We help share the food to needy people!<br />
                  The primary purpose of the app is to reduce food waste and help those in need by connecting food donors with recipients.<br />
                </p>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container fluid>
            <Row>
              <Col><img src={image2} alt="first slide" /></Col>
              <Col>
                <p className='text-center fs-1 para'>
                  Donors can create listings for their surplus food items, type of food, quantity, expiration date, and location for pickup or delivery.<br />
                  Sharing meals or food items with those in need can foster bonds, promote inclusivity, and address hunger or food insecurity.
                </p>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container fluid>
            <Row>
              <Col><img src={image3} alt="first slide" /></Col>
              <Col><p className='text-center fs-1 para'>Encourage users to engage with the community, share their experiences, and promote the app to others who may benefit from it.<br />
                Highlight the environmental and social impact of reducing food waste and helping those in need through the app.</p>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export const Footer = () => {
  return (
    <footer className="text-light py-4 fixed-bottom footer">
      <Container>
        <Row fluid>
          <Col md={6}>
            <h5 className='fs-1 fw-bold'>About Us</h5>
            <p className='fs-4'>
            A food sharing app on a website can be a powerful tool for fostering community engagement, reducing food waste, and supporting individuals and organizations dedicated to addressing food insecurity.
            </p>
          </Col>
          <Col md={6}>
            <h5  className='fs-1 fw-bold'>Follow Us</h5>
            <ul className="list-unstyled fs-4">
              <li>
                <span>
                  <FontAwesomeIcon icon={faFacebook} className="mr-2" />&nbsp;
                  Facebook
                </span>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faTwitter} className="mr-2" />&nbsp;
                  Twitter
                </span>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faInstagram} className="mr-2" />&nbsp;
                  Instagram
                </span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center mt-3 fixed-bottom fs-4">
        &copy; {new Date().getFullYear()} Share Extra Bites
      </div>
    </footer>
  );
};
