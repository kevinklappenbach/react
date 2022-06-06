
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect,useState } from "react"
import{getFetch} from '../helpers/getFetch'
import { Card,ListGroup,ListGroupItem } from 'react-bootstrap';
 import './card.css'



  const ItemListContainer =()=>{
   const [productos, setProductos]= useState([])
   const [loading, setLoading]= useState(true)
  useEffect (()=>{

 getFetch()
    .then ((resp)=>{
        setProductos(resp)
    })
    .catch(err =>console.log(err))
    .finally(()=>setLoading(false))
 } , [])
  console.log(productos)

    return(
    
    <div>
        {loading ?

        <h1>Cargando productos...</h1>
        :

         productos.map(producto =>

          <div className="card"  key={producto.id}>
            
            <Card   style={{ width: '18rem' }}>
             <Card.Img variant="top" src={ producto.imagen} />
             <Card.Body>
             <Card.Title></Card.Title>
             <Card.Text>
             {producto.nombre}
              </Card.Text>
              </Card.Body>
             <ListGroup className="list-group-flush">
             <ListGroupItem>{producto.descripcion}</ListGroupItem>
             <ListGroupItem>Cantidad disponible:{producto.stock}</ListGroupItem>
             <ListGroupItem> Precio:{producto.precio}</ListGroupItem>
             </ListGroup>
             <Card.Body>
             <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
             </Card.Body>
            </Card>

          </div>)
        }
 </div>
    )
    }
 export default ItemListContainer
    


