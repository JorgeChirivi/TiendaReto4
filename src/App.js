import './App.css';
import Navbar from './componentes/Navbar.js';
import Header from './componentes/Header.js';
import Articulo from './componentes/Articulo.js';
import Footer from './componentes/Footer.js';
import { Dashboard } from './componentes/Admin/Dashboard';


function App() {
  return (
    <Router>
      <div className="App">

        <Navbar />
        <Header />
        <div className='container container-fluid'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path="/producto/:id" element={<ProductDetails />} />
            <Route path="/admin/Dashboard" element={<Dashboard />} />


          </Routes>


        </div>

        <Articulo />
        <Footer />

      </div>
    </Router>
  );
}

export default App;
