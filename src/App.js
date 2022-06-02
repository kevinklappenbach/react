
import './App.css';

import Barra from './components/navbar';
import Main from './components/ItemListContainer'
import ItemsCount from './components/itemsCounts';



function App() {
  return (
    <div className="App" >
    <Barra/>
    <Main/>
    <ItemsCount/>
    </div>
  );
}

export default App;
