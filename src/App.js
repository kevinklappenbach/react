
import './App.css';

import Barra from './components/navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemsCount from './components/itemsCounts';
import{ BrowserRouter, Routes,Route, Navigate} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter >
    <Barra/>
    <Routes>
       <Route index path ='/' element={ <ItemListContainer/>} />
       <Route  path ='/categoria/:categoriaId' element={ <ItemListContainer/>} />
       <Route  path ='/detalles/:id' element={ <ItemDetailContainer/>} />
       <Route  path ='/' element={ <ItemsCount/>} />


       <Route index path ='*' element={< Navigate to='/' />} />

   </Routes>
   
    </BrowserRouter>
  );
}

export default App;
