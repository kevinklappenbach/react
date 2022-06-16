import 'bootstrap/dist/css/bootstrap.css';
import { Nav,Navbar,Container, NavDropdown} from 'react-bootstrap';
import CartWidget from './CartWidget';
import {Link , NavLink} from 'react-router-dom'
import './navbar.css'

function Barra(){

    return (
      <Navbar id="navbar" expand="lg">
        <Container>
          <Link to='/'>
          <Navbar.Brand id="brand">
            Miner Pro
          </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <NavDropdown title="Productos" id="nav" >
                <NavDropdown.Item className="products" >
                 <NavLink to="/categoria/rigs"> Rigs de mineria</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item className="products" href="#action/3.2">
                 <NavLink to='/categoria/placa'> Placas de video</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item className="products" href="#action/3.3">
                <NavLink to='/categoria/placas base'> Motherboards </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item className="products" href="#action/3.3">
                <NavLink to='/categoria/procesadores'> Procesadores </NavLink> 
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link id="nav" href="/QuienesSomos">
                Quienes somos
              </Nav.Link>
              <Nav.Link id="nav" href="#link">
                Contacto
              </Nav.Link>
              <Nav.Link id="nav" href="#link">
                <NavLink to='/cart'> <CartWidget/></NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}


export default Barra ;