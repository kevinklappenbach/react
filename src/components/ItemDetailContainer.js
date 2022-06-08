import 'bootstrap/dist/css/bootstrap.css';
import { useEffect,useState } from "react"
import{getFetch} from '../helpers/itemdetail'

import './card.css'



  const ItemDetailContainer =()=>{
   const [detail,setDetail]= useState([])
   const [loading, setLoading]= useState(true)
  useEffect (()=>{

 getFetch()
    .then ((resp)=>{
        setDetail(resp)
    })
    .catch(err =>console.log(err))
    .finally(()=>setLoading(false))
 } , [])
  console.log(detail)

    return(
    
    <div>
        {loading ?

        <h1>Cargando  detalle del producto...</h1>
        :

         detail.map(detail =>

          <div className="card"  key={detail.id}>
            
            <h1>{detail.id}</h1>

            <h2>{detail.descripcion}</h2>
             <h3>{detail.precio}</h3>

          </div>)
        }
 </div>
    )
    }
 export default ItemDetailContainer;
    
