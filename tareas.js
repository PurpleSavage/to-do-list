function obtenerTareas() {
  return Array.from(document.querySelectorAll(".mi-clase"));
}

function separarTareas(tareas) {
  const tareasMarcadas = [];
  const tareasNoMarcadas = [];

  tareas.forEach(tarea => {
    if (tarea.classList.contains("clase-marcada")) {
      tareasMarcadas.push(tarea);
    } else {
      tareasNoMarcadas.push(tarea);
    }
  });

  return {
    tareasMarcadas,
    tareasNoMarcadas
  };
}

function limpiarContenedor(contenedor) {
  contenedor.innerHTML = "";
}

function agregarTareas(contenedor, tareas) {
  tareas.forEach(tarea => {
    contenedor.appendChild(tarea);
  });
}

function obtenerNombreMesActual() {
  const fecha = new Date();
  const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  const mesActual = fecha.getMonth();
  const nombreMesActual = meses[mesActual];
  return nombreMesActual;
}

function obtenerDia() {
  const fecha = new Date();
  const dia = fecha.getDate();
  return dia;
}

function obtenerAnioActual() {
  const fecha = new Date();
  const anioActual = fecha.getFullYear();
  return anioActual;
}

function obtenerDiaSemana() {
  const fecha = new Date();
  const diaSemana = fecha.getDay();
    
  const diasSemana = [
    "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"
  ];
    
  const nombreDia = diasSemana[diaSemana];
    
  return nombreDia;
}

const fecha = document.querySelector(".fecha");
const dayWeek = document.querySelector(".dia");

const nombreMes = obtenerNombreMesActual();
const dia = obtenerDia();
const anio = obtenerAnioActual();
const diaActual = obtenerDiaSemana();

fecha.textContent = `${dia} de ${nombreMes} del ${anio}`;
dayWeek.textContent = `${diaActual}`;

// Agregar tareas
const contTareas = document.querySelector(".cont_tareas");
const tareaInput = document.querySelector(".tarea");
const agregarBtn = document.querySelector(".add");

function agregarTarea() {
  const tareaTexto = tareaInput.value.trim();
  if (tareaTexto !== "") {
    const nuevaTarea = document.createElement("div");
    nuevaTarea.classList.add("mi-clase");
    nuevaTarea.textContent = tareaTexto;
    contTareas.appendChild(nuevaTarea);
    tareaInput.value = "";
  }
}

agregarBtn.addEventListener("click", agregarTarea);

// Ordenar tareas
const ordenarBtn = document.querySelector(".ordenar");

ordenarBtn.addEventListener("click", () => {
  const tareas = obtenerTareas();
  const { tareasMarcadas, tareasNoMarcadas } = separarTareas(tareas);

  limpiarContenedor(contTareas);
  agregarTareas(contTareas, tareasNoMarcadas);
  agregarTareas(contTareas, tareasMarcadas);
});

// Marcar tarea
function marcarTarea(event) {
  const elemento = event.target;
  if (elemento.classList.contains("mi-clase")) {
    elemento.classList.toggle("clase-marcada");
  }
}

contTareas.addEventListener("click", marcarTarea);
