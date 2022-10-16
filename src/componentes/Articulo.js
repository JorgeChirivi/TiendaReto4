import React from 'react';

function Articulo(){
  return(
    
  <div className='Articulo'>
    

    <div class="clearfix"></div>
        <section id="content">
            <article class="article">
                <h2>Gorro orejas</h2>
                <p>Gorro sintetico con simulacion calentador orejas</p>
            </article>

            <article class="article">
                <h2>Chaqueta moto</h2>
                <p>Chaqueta material sintetico tipo motociclista</p>
            </article>

            <article class="article">
                <h2>Saco lana</h2>
                <p>Saco hilo apto para clima frio</p>
            </article>

            <article class="article">
                <h2>Panioleta</h2>
                <p>Panioletas algodon diferentes estilos</p>
            </article>

        </section>
        <aside>

            <h2>Encuentra el tuyo</h2>
            <form>
                <input type="text"></input>
                <input type="submit" value="Buscar"></input>
            </form>

        </aside>
        
        <div class="clearfix"></div>

        </div>
  

  
  );
}

export default Articulo;