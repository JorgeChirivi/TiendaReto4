import React from 'react'
import {Link} from "react-router-dom"

export const Sidebar = () => {
    return (
        <div className="Sidebar-wrapper">
            <nav id="Sidebar">
                <ul className="list-unstyled components">
                    <li>
                        <Link to="/"><i className='fa fa-tchometer'></i>Administracion</Link>
                    </li>
                    <li>
                        <a href="#productSubmenu" data-toggle="collapse" aria-expanded="false"
                         className='dropdown-toggle'><i className='fa fa-product-hunt'></i>Articulos</a>
                         <ul className="collapse list-unstyled" id="productSubmenu">
                            <li>
                                <Link to="/"><i className='fa fa-clipboard'>Listado de Articulos</i></Link>
                            </li>
                            <li>
                                <Link to="/"><i className='fa fa-plus'>Crear Articulos</i></Link>
                            </li>
                         </ul>
                    </li>
                    <li>
                        <Link to="/"><i className='fa fa-shopping-basket'></i>Pedidos</Link>
                    </li>

                    <li>
                        <Link to="/"><i className='fa fa-users'></i>Usuarios</Link>
                    </li>


                </ul>
            </nav>
        
        </div>

    )

}
export default Sidebar