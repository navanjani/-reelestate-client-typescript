import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ButtonComponent from "../../components/ButtonComponent";
import { ABOUT_US_ROUTE, LISTINGS_ROUTE } from "../../config/routes";
import LanguageSelector from "../../components/LanguageSelector";

export default function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <NavLink to={LISTINGS_ROUTE}>
            <ButtonComponent label="See Listings" />
          </NavLink>
        </Col>
        <Col>
          <NavLink to={`${ABOUT_US_ROUTE}/English`}>
            <ButtonComponent label="About Us" />
          </NavLink>
        </Col>
      </Row>
      <Row>
        <Col>
          <LanguageSelector />
        </Col>
      </Row>
    </Container>
  );
}
