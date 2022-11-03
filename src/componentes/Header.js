import React, { Fragment } from 'react';
import { Link } from 'react-dom'


function Header() {
  return (
    <Fragment>

      <nav className='navbar row'>

        <div className='Header'>

          <div class="box">
            <img src={require('../img/banner.png')} class='img-fluid rounded-top' alt='' />

          </div>

        </div>
        <div className="col-12 col-md-3 mt-4 mt-md-0">
          <div class="input-group">
            <input
              type="text"
              id="search_field"
              class="form-control"
              placeholder='Cual articulo busca'></input>
            <div class="input-group-append">
              <button id="search-btn" class="btn">
                <i class="fa fa fa" aria-hidden="true"></i>
              </button>
            </div>

          </div>

        </div>


        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">

          <div className="ml-4 dropdown d-inline">
            <Link to="#!" className="btn dropdown-toggle text-blue mr-4" type="button"
              id="dropDownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span>Panel de control</span></Link>
            <div className='dropdown-menu' aria-labelledby='dropDownMenu'>
              <Link className="dropdown-item" to="/">Administrador Articulos</Link>
              <Link className="dropdown-item" to="/">Pedidos</Link>
              <Link className="dropdown-item" to="/">Iniciar sesion</Link>
              <Link className="dropdown-item" to="/">Cerrar sesion</Link>
            </div>
          </div>
        </div>
      </nav>

    </Fragment>

  );
}

export default Header;