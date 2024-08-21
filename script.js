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
        const resultado = await CargarUrl(datos.films);
        const contenido = resultado.results;
        let contendoPeliculas = "";
        contenido.forEach((element) => {
            contendoPeliculas += `
                <div class="elementos">
                    <h2>${element.title}</h2>
                    <h3>Episodio</h3>
                    <p>${element.episode_id}</p>
                    <h3>Opening</h3>
                    <p>${element.opening_crawl}</p>
                    <h3>Director</h3>
                    <p>${element.director}</p>
                    <h3>Productor</h3>
                    <p>${element.producer}</p>
                    <h3>Fecha de lanzamiento</h3>
                    <p>${element.release_date}</p>
                </div>
            `;
        });
        contendoPeliculas = `
            <h1>Peliculas</h1>
            <div class="contenedor_elementos">
                ${contendoPeliculas}
            </div>
        `
        return contendoPeliculas;
    }
};
const CargarPersonas = async (datos) => {
    if (Object.hasOwnProperty.call(datos, "people")) {
        const resultado = await CargarUrl(datos.people);
        const contenido = resultado.results;
        let contendoPersonas = "";
        contenido.forEach((element) => {
            contendoPersonas += `
                <div class="elementos">
                    <h2>${element.name}</h2>
                    <h3>Altura</h3>
                    <p>${element.height}</p>
                    <h3>Masa</h3>
                    <p>${element.mass}</p>
                    <h3>Color de pelo</h3>
                    <p>${element.hair_color}</p>
                    <h3>Color de piel</h3>
                    <p>${element.skin_color}</p>
                    <h3>Color de ojos</h3>
                    <p>${element.eye_color}</p>
                    <h3>Año de nacimiento</h3>
                    <p>${element.birth_year}</p>
                    <h3>Genero</h3>
                    <p>${element.gender}</p>
                </div>
            `;
        });
        contendoPersonas = `
            <h1>Personas</h1>
            <div class="contenedor_elementos">
                ${contendoPersonas}
            </div>
        `
        return contendoPersonas;
    }
};
const CargarPlanetas = async (datos) => {
    if (Object.hasOwnProperty.call(datos, "planets")) {
        const resultado = await CargarUrl(datos.planets);
        const contenido = resultado.results;
        let contendoPlanetas = "";
        contenido.forEach((element) => {
            contendoPlanetas += `
                <div class="elementos">
                    <h2>${element.name}</h2>
                    <h3>Periordo de rotacion</h3>
                    <p>${element.rotation_period}</p>
                    <h3>Periordo orbital</h3>
                    <p>${element.orbital_period}</p>
                    <h3>Diametro</h3>
                    <p>${element.diameter}</p>
                    <h3>Clima</h3>
                    <p>${element.climate}</p>
                    <h3>Gravedad</h3>
                    <p>${element.gravity}</p>
                    <h3>Terreno</h3>
                    <p>${element.terrain}</p>
                    <h3>Superficie del agua</h3>
                    <p>${element.surface_water}</p>
                    <h3>Poblacion</h3>
                    <p>${element.population}</p>
                </div>
            `;
        });
        contendoPlanetas = `
            <h1>Planetas</h1>
            <div class="contenedor_elementos">
                ${contendoPlanetas}
            </div>
        `
        return contendoPlanetas;
    }
};
const CargarEspecies = async (datos) => {
    if (Object.hasOwnProperty.call(datos, "species")) {
        const resultado = await CargarUrl(datos.species);
        const contenido = resultado.results;
        let contendoEspecies = "";
        contenido.forEach((element) => {
            contendoEspecies += `
                <div class="elementos">
                    <h2>${element.name}</h2>
                    <h3>Clasificacion</h3>
                    <p>${element.classification}</p>
                    <h3>Designacion</h3>
                    <p>${element.designation}</p>
                    <h3>Altura media</h3>
                    <p>${element.average_height}</p>
                    <h3>Colores de piel</h3>
                    <p>${element.skin_colors}</p>
                    <h3>Colores de pelo</h3>
                    <p>${element.hair_colors}</p>
                    <h3>Colores de ojos</h3>
                    <p>${element.eye_colors}</p>
                    <h3>Vida media</h3>
                    <p>${element.average_lifespan}</p>
                    <h3>Lenguaje</h3>
                    <p>${element.language}</p>
                </div>
            `;
        });
        contendoEspecies = `
            <h1>Especies</h1>
            <div class="contenedor_elementos">
                ${contendoEspecies}
            </div>
        `
        return contendoEspecies;
    }
};
const CargarNaves = async (datos) => {
    if (Object.hasOwnProperty.call(datos, "starships")) {
        const resultado = await CargarUrl(datos.starships);
        const contenido = resultado.results;
        let contendoNaves = "";
        contenido.forEach((element) => {
            contendoNaves += `
                <div class="elementos">
                    <h2>${element.name}</h2>
                    <h3>Modelo</h3>
                    <p>${element.model}</p>
                    <h3>Fabricante</h3>
                    <p>${element.manufacturer}</p>
                    <h3>Precio en creditos</h3>
                    <p>${element.cost_in_credits}</p>
                    <h3>Largo</h3>
                    <p>${element.length}</p>
                    <h3>Maxima velocidad atmosferica</h3>
                    <p>${element.max_atmosphering_speed}</p>
                    <h3>Tripulación</h3>
                    <p>${element.crew}</p>
                    <h3>Pasajeros</h3>
                    <p>${element.passengers}</p>
                    <h3>Capacidad de carga</h3>
                    <p>${element.cargo_capacity}</p>
                    <h3>Consumibles</h3>
                    <p>${element.consumables}</p>
                    <h3>Clasificacion de hyperpropulsores</h3>
                    <p>${element.hyperdrive_rating}</p>
                    <h3>MGLT</h3>
                    <p>${element.MGLT}</p>
                    <h3>Clase de nave</h3>
                    <p>${element.starship_class}</p>
                </div>
            `;
        });
        contendoNaves = `
            <h1>Naves</h1>
            <div class="contenedor_elementos">
                ${contendoNaves}
            </div>
        `
        return contendoNaves;
    }
};
const CargarVehiculos = async (datos) => {
    if (Object.hasOwnProperty.call(datos, "vehicles")) {
        const resultado = await CargarUrl(datos.vehicles);
        const contenido = resultado.results;
        let contendoVehiculos = "";
        contenido.forEach((element) => {
            contendoVehiculos += `
                <div class="elementos">
                    <h2>${element.name}</h2>
                    <h3>Modelo</h3>
                    <p>${element.model}</p>
                    <h3>Fabricante</h3>
                    <p>${element.manufacturer}</p>
                    <h3>Costo en creditos</h3>
                    <p>${element.cost_in_credits}</p>
                    <h3>Largo</h3>
                    <p>${element.length}</p>
                    <h3>Maxima velocidad atmosferica</h3>
                    <p>${element.max_atmosphering_speed}</p>
                    <h3>Tripulación</h3>
                    <p>${element.crew}</p>
                    <h3>Pasajeros</h3>
                    <p>${element.passengers}</p>
                    <h3>Capacidad de carga</h3>
                    <p>${element.cargo_capacity}</p>
                    <h3>Consumibles</h3>
                    <p>${element.consumables}</p>
                    <h3>Clase de vehiculo</h3>
                    <p>${element.vehicle_class}</p>
                </div>
            `;
        });
        contendoVehiculos = `
            <h1>Vehiculos</h1>
            <div class="contenedor_elementos">
                ${contendoVehiculos}
            </div>
        `
        return contendoVehiculos;
    }
};
const MostrarCategoria = async () => {
    const datos = await CargarUrl("https://swapi.py4e.com/api/?format=json");
    const TipoCategoria = Categoria.value;
    switch (TipoCategoria) {
        case "all":
            ContenidoAPI.innerHTML += await CargarPeliculas(datos);
            ContenidoAPI.innerHTML += await CargarPersonas(datos);
            ContenidoAPI.innerHTML += await CargarPlanetas(datos);
            ContenidoAPI.innerHTML += await CargarEspecies(datos);
            ContenidoAPI.innerHTML += await CargarNaves(datos);
            ContenidoAPI.innerHTML += await CargarVehiculos(datos);
            break;
        case "films":
            ContenidoAPI.innerHTML = await CargarPeliculas(datos);
            break;
        case "people":
            ContenidoAPI.innerHTML = await CargarPersonas(datos);
            break;
        case "planets":
            ContenidoAPI.innerHTML = await CargarPlanetas(datos);
            break;
        case "species":
            ContenidoAPI.innerHTML = await CargarEspecies(datos);
            break;
        case "starships":
            ContenidoAPI.innerHTML = await CargarNaves(datos);
            break;
        case "vehicles":
            ContenidoAPI.innerHTML = await CargarVehiculos(datos);
            break;
        default:
            alert("Ese valor no es valido");
            break;
    }
};
MostrarCategoria();