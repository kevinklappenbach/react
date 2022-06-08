
import './App.css';

import Barra from './components/navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemsCount from './components/itemsCounts';



function App() {
  return (
    <div className="App" >
    <Barra/>
    <ItemListContainer/>
    <ItemDetailContainer/>
    <ItemsCount/>
    </div>
  );
}

export default App;
