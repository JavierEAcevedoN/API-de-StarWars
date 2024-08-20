const Categoria = document.getElementById("categoria");
const Buscador = document.getElementById("buscador");
const ContenidoAPI = document.getElementById("contenido_api");
const CargarUrl = async (url) => {
    try {
        const respuesta = await fetch(url);
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            return datos;
        } else if (respuesta.status === 404) {
            console.log("La URL que buscas no existe");
        } else {
            console.log("Hubo un error y no sabemos que paso");
        }
    } catch (error) {
        console.log(error);
    }
};
const CargarPeliculas = async (datos) => {
    if (Object.hasOwnProperty.call(datos, "films")) {
        const resultado = await CargarUrl(datos.films)
        const contenido = resultado.results
        let contendoPeliculas = ""
        contenido.forEach(element => {
            contendoPeliculas += `
                <div class="peliculas">
                    <h1>${element.title}</h1>
                    <p>${element.episode_id}</p>
                    <p>${element.opening_crawl}</p>
                    <h2>${element.director}</h2>
                    <h2>${element.producer}</h2>
                    <h3>${element.release_date}</h3>
                </div>
            `
        });
        ContenidoAPI.innerHTML = contendoPeliculas
    }
}
const MostrarCategoria = async () => {
    const datos = await CargarUrl("https://swapi.py4e.com/api/?format=json");
    const TipoCategoria = Categoria.value;
    switch (TipoCategoria) {
        case "all":
            /* for (const i in datos) {
                if (Object.hasOwnProperty.call(datos, i)) {
                    const dato = datos[i];
                    const resultado = await CargarUrl(dato);
                    const contenido = resultado.results;
                    contenido.forEach((element) => {
                        console.log(element);
                    });
                }
            } */
            break;
        case "films":
            CargarPeliculas(datos)
            break;
        case "":
            
            break;
        case "":
            
            break;
        case "":
            
            break;
        case "":
            
            break;
        case "":
            
            break;
        default:
            alert("Ese valor no es valido")
            break;
    }
};
MostrarCategoria();
