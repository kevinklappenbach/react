import {useState} from 'react';
import  {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import './btn-carrito.css'

const InputCount =()=>{

    return (
    <div className='btn-carrito'>
        <Link to='/cart'>
           <Button
              
            onClick={()=> console.log('ir al cart')}
            > Terminar compra </Button>
       </Link> 
        <Link to='/'>
        <Button
          
         onClick={()=> console.log('ir al cart')}
         > Seguir comprando </Button>
         </Link> 
    </div>
    )
}


const ButtonCount =({handleInter})=>{
    return (

        <Button
        
        onClick={handleInter}> Agregar al carrito</Button>
    )
}

const Intercambiabilidad=()=>{

    const [inputType, setIputType]= useState('button')
    const handleInter=()=>
    setIputType('input')



return(

    <div>
     
        {
        
        inputType==='button'?
        <ButtonCount handleInter={handleInter}/>
        :

        <InputCount/>
    
    
    }


    </div>
)}


export default Intercambiabilidad;