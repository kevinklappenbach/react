
import './App.css';

import Barra from './components/navbar';
import ItemListContainer from './components/ItemListContainer'
import ItemsCount from './components/itemsCounts';



function App() {
  return (
    <div className="App" >
    <Barra/>
    <ItemListContainer/>
    <ItemsCount/>
    </div>
  );
}

export default App;
