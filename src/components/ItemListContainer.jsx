
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect,useState } from "react"
import{getFetch} from '../helpers/getFetch'
import { Card,Button } from 'react-bootstrap';
import {Link,useParams } from 'react-router-dom'
import './card.css'




  const ItemListContainer =()=>{
   const [productos, setProductos]= useState([])
   const [loading, setLoading]= useState(true)
   const {categoriaId} = useParams()
  
  
   useEffect(() => {
     if (categoriaId) {
       getFetch()
         .then((resp) => {
           setProductos(
             resp.filter((producto) => producto.categoria === categoriaId)
           );
           setLoading(false);
         })
         .catch((err) => console.log(err));
     } else {
       getFetch()
         .then((resp) => {
           setProductos(resp);
           setLoading(false);
         })
         .catch((err) => console.log(err));
     }
   }, [categoriaId]);
    
 
   
    return(
    
    <div>
        {loading ?

        <h1>Cargando productos...</h1>
        :

         productos.map(productos =>

          <div className="card"  key={productos.id}>
            
            <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
               <Card.Title>{productos.id}</Card.Title>
               <Card.Text>
               {productos.descripcion}
               {productos.categoria}
               </Card.Text>
               <Link to= {`/detalles/${productos.id}`}>
               <Button variant="primary">Ver destalle</Button>
               </Link>
   
              </Card.Body>
            </Card>

          </div>)
        }
 </div>
    )
    }
 export default ItemListContainer
    


