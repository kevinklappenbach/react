import 'bootstrap/dist/css/bootstrap.css';
import { Nav,Navbar,Container, NavDropdown} from 'react-bootstrap';
import CartWidget from './CartWidget';
import './navbar.css'

function Barra(){

    return (
      <Navbar id="navbar" expand="lg">
        <Container>
          <Navbar.Brand id="brand" href="#home">
            Miner Pro
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <NavDropdown title="Productos" id="nav" >
                <NavDropdown.Item className="products" href="#action/3.1">
                  Rigs de mineria
                </NavDropdown.Item>
                <NavDropdown.Item className="products" href="#action/3.2">
                  Placas de video
                </NavDropdown.Item>
                <NavDropdown.Item className="products" href="#action/3.3">
                  Motherboards
                </NavDropdown.Item>
                <NavDropdown.Item className="products" href="#action/3.3">
                  Procesadores
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link id="nav" href="#home">
                Quienes somos
              </Nav.Link>
              <Nav.Link id="nav" href="#link">
                Contacto
              </Nav.Link>
              <Nav.Link id="nav" href="#link">
                
                <CartWidget/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}


export default Barra ;