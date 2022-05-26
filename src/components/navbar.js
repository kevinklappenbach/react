import 'bootstrap/dist/css/bootstrap.css';
import { Nav,Navbar,Container} from 'react-bootstrap';
import './navbar.css'

function Barra(){

    return(

        
        <Navbar id="navbar" expand="lg">
        <Container>
          <Navbar.Brand id="brand" href="#home">Mi Marca</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse   id="basic-navbar-nav">
            <Nav  className="m-auto">
              <Nav.Link id="nav" href="#home">Quienes somos</Nav.Link>
              <Nav.Link id="nav" href="#link">Productos</Nav.Link>
              <Nav.Link id="nav" href="#link">Contacto</Nav.Link>
             
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

 
      
    )
}


export default Barra ;