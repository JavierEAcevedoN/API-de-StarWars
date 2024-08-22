const Categoria = document.getElementById("categoria");
const TipoBusqueda = document.getElementById("tipo_de_busqueda");
const Buscador = document.getElementById("buscador");
const ContenidoAPI = document.getElementById("contenido_api");
const CargarUrl = async (url) => {
    try {
        const respuesta = await fetch(url);
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            return datos;
        } else if (respuesta.status === 404) {
            alert("La URL que buscas no existe");
        } else {
            alert("Hubo un error y no sabemos que paso");
        }
    } catch (error) {
        alert(error);
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
                    <p class="Episodio">${element.episode_id}</p>
                    <h3>Opening</h3>
                    <p class="Opening">${element.opening_crawl}</p>
                    <h3>Director</h3>
                    <p class="Director">${element.director}</p>
                    <h3>Productor</h3>
                    <p class="Productor">${element.producer}</p>
                    <h3>Fecha de lanzamiento</h3>
                    <p class="Fecha_de_lanzamiento">${element.release_date}</p>
                </div>
            `;
        });
        contendoPeliculas = `
            <h1>Peliculas</h1>
            <div class="contenedor_elementos">
                ${contendoPeliculas}
            </div>
        `;
        return contendoPeliculas;
    }
};
const CargarPersonas = async (datos) => {
    if (Object.hasOwnProperty.call(datos, "people")) {
        let resultado = await CargarUrl(datos.people);
        let contendoPersonas = "";
        while (true) {
            let contenido = resultado.results;
            let pagina = resultado.next;
            contenido.forEach((element) => {
                contendoPersonas += `
                <div class="elementos">
                    <h2>${element.name}</h2>
                    <h3>Altura</h3>
                    <p class="Altura">${element.height}</p>
                    <h3>Masa</h3>
                    <p class="Masa">${element.mass}</p>
                    <h3>Color de pelo</h3>
                    <p class="Color_de_pelo">${element.hair_color}</p>
                    <h3>Color de piel</h3>
                    <p class="Color_de_piel">${element.skin_color}</p>
                    <h3>Color de ojos</h3>
                    <p class="Color_de_ojos">${element.eye_color}</p>
                    <h3>Año de nacimiento</h3>
                    <p class="Año_de_nacimiento">${element.birth_year}</p>
                    <h3>Genero</h3>
                    <p class="Genero">${element.gender}</p>
                </div>
            `;
            });
            if (pagina === null) {
                break;
            } else {
                resultado = await CargarUrl(pagina);
            }
        }
        contendoPersonas = `
        <h1>Personas</h1>
        <div class="contenedor_elementos">
            ${contendoPersonas}
        </div>
    `;
        return contendoPersonas;
    }
};
const CargarPlanetas = async (datos) => {
    if (Object.hasOwnProperty.call(datos, "planets")) {
        let resultado = await CargarUrl(datos.planets);
        let contendoPlanetas = "";
        while (true) {
            let contenido = resultado.results;
            let pagina = resultado.next;
            contenido.forEach((element) => {
                contendoPlanetas += `
                    <div class="elementos">
                        <h2>${element.name}</h2>
                        <h3>Periodo de rotacion</h3>
                        <p class="Periodo_de_rotacion">${element.rotation_period}</p>
                        <h3>Periodo orbital</h3>
                        <p class="Periodo_orbital">${element.orbital_period}</p>
                        <h3>Diametro</h3>
                        <p class="Diametro">${element.diameter}</p>
                        <h3>Clima</h3>
                        <p class="Clima">${element.climate}</p>
                        <h3>Gravedad</h3>
                        <p class="Gravedad">${element.gravity}</p>
                        <h3>Terreno</h3>
                        <p class="Terreno">${element.terrain}</p>
                        <h3>Superficie del agua</h3>
                        <p class="Superficie">${element.surface_water}</p>
                        <h3>Poblacion</h3>
                        <p class="Poblacion">${element.population}</p>
                    </div>
                `;
            });
            if (pagina === null) {
                break;
            } else {
                resultado = await CargarUrl(pagina);
            }
        }
        contendoPlanetas = `
            <h1>Planetas</h1>
            <div class="contenedor_elementos">
                ${contendoPlanetas}
            </div>
        `;
        return contendoPlanetas;
    }
};
const CargarEspecies = async (datos) => {
    if (Object.hasOwnProperty.call(datos, "species")) {
        let resultado = await CargarUrl(datos.species);
        let contendoEspecies = "";
        while (true) {
            let contenido = resultado.results;
            let pagina = resultado.next;
            contenido.forEach((element) => {
                contendoEspecies += `
                    <div class="elementos">
                        <h2>${element.name}</h2>
                        <h3>Clasificacion</h3>
                        <p class="Clasificacion">${element.classification}</p>
                        <h3>Designacion</h3>
                        <p class="Designacion">${element.designation}</p>
                        <h3>Altura media</h3>
                        <p class="Altura_media">${element.average_height}</p>
                        <h3>Colores de piel</h3>
                        <p class="Colores_de_piel">${element.skin_colors}</p>
                        <h3>Colores de pelo</h3>
                        <p class="Colores_de_pelo">${element.hair_colors}</p>
                        <h3>Colores de ojos</h3>
                        <p class="Colores_de_ojos">${element.eye_colors}</p>
                        <h3>Vida media</h3>
                        <p class="Vida_media">${element.average_lifespan}</p>
                        <h3>Lenguaje</h3>
                        <p class="Lenguaje">${element.language}</p>
                    </div>
                `;
            });
            if (pagina === null) {
                break;
            } else {
                resultado = await CargarUrl(pagina);
            }
        }
        contendoEspecies = `
            <h1>Especies</h1>
            <div class="contenedor_elementos">
                ${contendoEspecies}
            </div>
        `;
        return contendoEspecies;
    }
};
const CargarNaves = async (datos) => {
    if (Object.hasOwnProperty.call(datos, "starships")) {
        let resultado = await CargarUrl(datos.starships);
        let contendoNaves = "";
        while (true) {
            let contenido = resultado.results;
            let pagina = resultado.next;
            contenido.forEach((element) => {
                contendoNaves += `
                    <div class="elementos">
                        <h2>${element.name}</h2>
                        <h3>Modelo</h3>
                        <p class="Modelo">${element.model}</p>
                        <h3>Fabricante</h3>
                        <p class="Fabricante">${element.manufacturer}</p>
                        <h3>Precio en creditos</h3>
                        <p class="Precio_en_creditos">${element.cost_in_credits}</p>
                        <h3>Largo</h3>
                        <p class="Largo">${element.length}</p>
                        <h3>Maxima velocidad atmosferica</h3>
                        <p class="Maxima_velocidad_atmosferica">${element.max_atmosphering_speed}</p>
                        <h3>Tripulación</h3>
                        <p class="Tripulación">${element.crew}</p>
                        <h3>Pasajeros</h3>
                        <p class="Pasajeros">${element.passengers}</p>
                        <h3>Capacidad de carga</h3>
                        <p class="Capacidad_de_carga">${element.cargo_capacity}</p>
                        <h3>Consumibles</h3>
                        <p class="Consumibles">${element.consumables}</p>
                        <h3>Clasificacion de hyperpropulsores</h3>
                        <p class="Clasificacion_de_hyperpropulsores">${element.hyperdrive_rating}</p>
                        <h3>MGLT</h3>
                        <p class="MGLT">${element.MGLT}</p>
                        <h3>Clase de nave</h3>
                        <p class="Clase_de_nave">${element.starship_class}</p>
                    </div>
                `;
            });
            if (pagina === null) {
                break;
            } else {
                resultado = await CargarUrl(pagina);
            }
        }
        contendoNaves = `
            <h1>Naves</h1>
            <div class="contenedor_elementos">
                ${contendoNaves}
            </div>
        `;
        return contendoNaves;
    }
};
const CargarVehiculos = async (datos) => {
    if (Object.hasOwnProperty.call(datos, "vehicles")) {
        let resultado = await CargarUrl(datos.vehicles);
        let contendoVehiculos = "";
        while (true) {
            let contenido = resultado.results;
            let pagina = resultado.next;
            contenido.forEach((element) => {
                contendoVehiculos += `
                    <div class="elementos">
                        <h2>${element.name}</h2>
                        <h3>Modelo</h3>
                        <p class="Modelo">${element.model}</p>
                        <h3>Fabricante</h3>
                        <p class="Fabricante">${element.manufacturer}</p>
                        <h3>Costo en creditos</h3>
                        <p class="Costo_en_creditos">${element.cost_in_credits}</p>
                        <h3>Largo</h3>
                        <p class="Largo">${element.length}</p>
                        <h3>Maxima velocidad atmosferica</h3>
                        <p class="Maxima_velocidad_atmosferica">${element.max_atmosphering_speed}</p>
                        <h3>Tripulación</h3>
                        <p class="Tripulación">${element.crew}</p>
                        <h3>Pasajeros</h3>
                        <p class="Pasajeros">${element.passengers}</p>
                        <h3>Capacidad de carga</h3>
                        <p class="Capacidad_de_carga">${element.cargo_capacity}</p>
                        <h3>Consumibles</h3>
                        <p class="Consumibles">${element.consumables}</p>
                        <h3>Clase de vehiculo</h3>
                        <p class="Clase_de_vehiculo">${element.vehicle_class}</p>
                    </div>
                `;
            });
            if (pagina === null) {
                break;
            } else {
                resultado = await CargarUrl(pagina);
            }
        }
        contendoVehiculos = `
            <h1>Vehiculos</h1>
            <div class="contenedor_elementos">
                ${contendoVehiculos}
            </div>
        `;
        return contendoVehiculos;
    }
};
const MostrarOpciones = () => {
    const elemento = ContenidoAPI.children[1].children[0];
    const contenido = elemento.querySelectorAll("h3");
    if (Categoria.value === "films") {
        TipoBusqueda.innerHTML = `
            <option value="Nada">Nada</option>
            <option value="Titulo">Titulo</option>
        `;
        contenido.forEach((h3) => {
            TipoBusqueda.innerHTML += `<option value="${h3.textContent
                .split(" ")
                .join("_")}">${h3.textContent}</option>`;
        });
    } else {
        TipoBusqueda.innerHTML = `
            <option value="Nada">Nada</option>
            <option value="Nombre">Nombre</option>
            `;
        contenido.forEach((h3) => {
            TipoBusqueda.innerHTML += `<option value="${h3.textContent
                .split(" ")
                .join("_")}">${h3.textContent}</option>`;
        });
    }
    TipoBusqueda.style.display = "inline-block";
};
const MostrarBusqueda = () => {
    const elementos = ContenidoAPI.children[1].children;
    for (let i = 0; i < elementos.length; i++) {
        const element = elementos[i];
        element.style.display = "block";
    }
    Buscador.value = "";
    if (TipoBusqueda.value !== "Nada") {
        Buscador.style.display = "inline-block";
    } else {
        Buscador.style.display = "none";
    }
};
const BuscarElementos = () => {
    const opcion = TipoBusqueda.value;
    const busqueda = Buscador.value;
    const elementos = ContenidoAPI.children[1].children;
    if (/["<>=]+/g.test(busqueda)) {
        alert("No se puede ingresar eso");
        Buscador.value = "";
        return;
    }
    const patron = new RegExp(`^${busqueda}`, "i");
    if (opcion === "Titulo" || opcion === "Nombre") {
        for (let i = 0; i < elementos.length; i++) {
            const elemento = elementos[i];
            const h2 = elemento.children[0];
            if (!patron.test(h2.textContent)) {
                h2.parentElement.style.display = "none";
            } else {
                h2.parentElement.style.display = "block";
            }
        }
    } else {
        const elemento = ContenidoAPI.querySelectorAll(`.${opcion}`);
        elemento.forEach((element) => {
            if (!patron.test(element.textContent)) {
                element.parentElement.style.display = "none";
            } else {
                element.parentElement.style.display = "block";
            }
        });
    }
    if (
        ContenidoAPI.querySelectorAll('div[style="display: none;"]').length ==
        elementos.length
    ) {
        alert(
            `No se encontro ninguna coincidencia de ${opcion
                .split("_")
                .join(" ")}`
        );
        for (let i = 0; i < elementos.length; i++) {
            const element = elementos[i];
            element.style.display = "block";
        }
        Buscador.value = "";
    }
};
const MostrarCategoria = async () => {
    const datos = await CargarUrl("https://swapi.py4e.com/api/?format=json");
    const TipoCategoria = Categoria.value;
    switch (TipoCategoria) {
        case "all":
            ContenidoAPI.innerHTML = await CargarPeliculas(datos);
            ContenidoAPI.innerHTML += await CargarPersonas(datos);
            ContenidoAPI.innerHTML += await CargarPlanetas(datos);
            ContenidoAPI.innerHTML += await CargarEspecies(datos);
            ContenidoAPI.innerHTML += await CargarNaves(datos);
            ContenidoAPI.innerHTML += await CargarVehiculos(datos);
            Buscador.style.display = "none";
            TipoBusqueda.style.display = "none";
            break;
        case "films":
            ContenidoAPI.innerHTML = await CargarPeliculas(datos);
            Buscador.style.display = "none";
            MostrarOpciones();
            break;
        case "people":
            ContenidoAPI.innerHTML = await CargarPersonas(datos);
            Buscador.style.display = "none";
            MostrarOpciones();
            break;
        case "planets":
            ContenidoAPI.innerHTML = await CargarPlanetas(datos);
            Buscador.style.display = "none";
            MostrarOpciones();
            break;
        case "species":
            ContenidoAPI.innerHTML = await CargarEspecies(datos);
            Buscador.style.display = "none";
            MostrarOpciones();
            break;
        case "starships":
            ContenidoAPI.innerHTML = await CargarNaves(datos);
            Buscador.style.display = "none";
            MostrarOpciones();
            break;
        case "vehicles":
            ContenidoAPI.innerHTML = await CargarVehiculos(datos);
            Buscador.style.display = "none";
            MostrarOpciones();
            break;
        default:
            alert("Ese valor no es valido");
            break;
    }
};
MostrarCategoria();
