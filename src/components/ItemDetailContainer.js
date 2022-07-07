import 'bootstrap/dist/css/bootstrap.css';
import { useEffect,useState,useContext } from "react"
import{getFetchOne} from '../helpers/getFetch'
import {useParams} from 'react-router-dom'
import './detalle.css'
import ItemCount from './itemCount'
import {CartContext} from './contexts/cartContext'




  const ItemDetailContainer =()=>{
    const {cart,addToCart}= useContext(CartContext)

    const onAdd=(cant)=>{
      console.log(cant)
      addToCart({...producto,cantidad: cant})
    }
   const [producto,setProducto]= useState({})
   const [loading, setLoading]= useState(true)
   const {id}= useParams()
   console.log(id)
   console.log(cart)


  useEffect (()=>{

 getFetchOne()
    .then ((resp)=>{
        setProducto(resp)
    })
    .catch(err =>console.log(err))
    .finally(()=>setLoading(false))
 } , [])
  console.log(producto)

  
    return(
    
    <div className='detalle'>
        {loading ?

        <h1>Cargando  detalle del producto...</h1>
        :

         producto.map(producto =>

          <div className="detalle"  key={producto.id}>
           
            <h1>{producto.id}</h1>

            <h2>{producto.descripcion}</h2>
             <h3>{producto.precio}</h3>
             <h3>{producto.categoria} </h3>
              <ItemCount initial={1} stock={10} onAdd={onAdd}/>
              
             

          </div>)
          
        }
       
              
     </div>
    )
    }
 export default ItemDetailContainer;
    
