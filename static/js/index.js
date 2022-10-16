console.log("Starting");

// Bloq import

// Bloq variables y constantes

// Bloq Funciones

const listarRopa = (resultado) =>{

    resultado.forEach( (articulo) =>{
        // Destructuring
        const {id, nombre, descripcion, precio, imagen } = articulo;
        const { url } = imagen;
        const contenedorImagen = document.querySelector(".listado");
        contenedorImagen.innerHTML += `
                                            <div class="listado-Ropa">
                                            <img layout='responsive' width="100" height="220" src="${url}" alt="${nombre}">
                                                
                                                <div class="listado-contenido">
                                                    <h3>${nombre}</h3>
                                                    <p class="listado-descripcion">${descripcion}</p>
                                                    <p class="listado-precio">$${precio}</p>
                                                    <a data-ropa="${id}" class="listado-enlace" href="ropa.html?id=${id}">
                                                        Ver Producto
                                                    </a>
                                                </div>
                                            </div>
                                        `;
    } );
};

// Asyncronas
const consultarApi = async () =>{

    try {
        
        const respuesta = await fetch("https://sianneiva.herokuapp.com/");
        const resultado = await respuesta.json();
        
        listarRopa(resultado);

    } catch (error) {
        console.log("Error: " + error.message);
    }


};

// Bloqb Programa Principal
consultarApi();