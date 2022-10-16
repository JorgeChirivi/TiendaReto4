import './App.css';
import Navbar from './componentes/Navbar.js';
import Header from './componentes/Header.js';
import Articulo from './componentes/Articulo.js';
import Footer from './componentes/Footer.js';

function App() {
  return (
    <div className="App">
     
     <Navbar/>
     <Header/>
 
     <Articulo/>
     <Footer/>
   
    </div>
  );
}

export default App;
