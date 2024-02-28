/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */

  datosPersona.nombre = prompt("¿Cual es tu nombre?");
  let anio = prompt("¿Cual es tu año de nacimiento?");
  datosPersona.edad = 2024 - parseInt(anio);
  datosPersona.ciudad = prompt("¿Cual es tu ciudad?");
  let interes = confirm("¿Te interesa javascript?");

  if (interes === true) {
    datosPersona.interesPorJs = "Si";
  } else {
    datosPersona.interesPorJs = "No";
  }
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  
  const nombre = document.getElementById("nombre");
  const edad = document.getElementById("edad");
  const ciudad = document.getElementById("ciudad");
  const javascript = document.getElementById("javascript");

  nombre.innerHTML = datosPersona.nombre;
  edad.innerHTML = datosPersona.edad;
  ciudad.innerHTML = datosPersona.ciudad;
  javascript.innerHTML = datosPersona.interesPorJs;
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  
  const fila = document.getElementById('fila');

  if (fila.children.length === 0) {
    listado.forEach(materia => {
      const caja = document.createElement('div');

      const imagen = document.createElement('img');
      imagen.setAttribute('src', materia.imgUrl);
      imagen.setAttribute('alt', materia.lenguajes);

      const pLenguaje = document.createElement('p');
      pLenguaje.textContent = "Lenguajes: " + materia.lenguajes;

      const pBimestre = document.createElement('p');
      pBimestre.textContent = "Bimestre: " + materia.bimestre;

      caja.classList.add('caja');
      pLenguaje.classList.add('lenguajes');
      pBimestre.classList.add('bimestre');

      caja.appendChild(imagen);
      caja.appendChild(pLenguaje);
      caja.appendChild(pBimestre);
      fila.appendChild(caja);
    });
  }
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 
  const sitio = document.getElementById('sitio');
  sitio.classList.toggle('dark');
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

const sobreMi = document.getElementById("sobre-mi");

window.addEventListener("keydown", e => {
  if (e.code === "KeyF") {
    sobreMi.classList.remove("oculto");
  }
})