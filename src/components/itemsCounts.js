import { useState } from "react"
import { Button } from "react-bootstrap"

function ItemCount({ stock, onAdd }) {
	const [count, setCount] = useState(1)

    const product= 10

    const mostrarAlerta=()=>{

        alert('agregaste productos al carrito')
    
    }
   
 

	return (
		<div>

			<Button onClick={() => setCount(count - 1)} className="btn-lg btn-light bi bi-dash-circle-fill" disabled={count === 0}>quitar</Button>
				<label className="fs-3 mx-4 text-success">{count}</label>
			<Button
				onClick={() => setCount(count + 1)}
				className="btn-lg btn-light btn-danger bi bi-plus-circle-fill"
				disabled={count > product - 1}>agregar</Button>
			<div className="text-center">
				<Button onClick={()=> mostrarAlerta( )}className="btn-success"disabled={stock === 0}>Agregar al Carrito</Button>
                <button type="button" className="btn btn-outline-dark btn-sm m-1" disabled>{product} cantidades disponibles</button>
			</div>
		</div>
	)
    
}



export default ItemCount

