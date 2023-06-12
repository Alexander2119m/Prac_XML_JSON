/**
 * La función seleccionarSemestre se encarga de seleccionar y generar una tabla de horarios
 * según la opción elegida en un elemento select con el id "semestre".
 */
function seleccionarSemestre() {
  // Obtener el valor seleccionado en el elemento select con el id "semestre"
  var opcion = document.getElementById("semestre").value;

  // Verificar la opción seleccionada y generar la tabla correspondiente
  if (opcion === "1") {
    // Crear un elemento de botón para generar la tabla de Horario 1
    var generarTablaBtn = document.createElement("button");
    generarTablaBtn.innerHTML = "Horario 1 ";
    generarTablaBtn.onclick = generarTabla;
    // Agregar el botón a la página
    document.body.appendChild(generarTablaBtn);
  } else if (opcion === "2") {
    // Crear un elemento de botón para generar la tabla de Horario 2
    var generarTabla2Btn = document.createElement("button");
    generarTabla2Btn.innerHTML = "Horario 2";
    generarTabla2Btn.onclick = generarTabla2;
    // Agregar el botón a la página
    document.body.appendChild(generarTabla2Btn);
  }
}
/**
 * La función generarTabla se encarga de generar una tabla HTML a partir de un conjunto de datos JSON.
 */
function generarTabla() {
  // Datos JSON que contienen la información de los horarios
  var jsonData = [
    {
      Horario: [
        {
          Dia: "Lunes",
          hora: "8:00-10:00",
          Asignatura: "Fundamentos de tecnologías de la información",
          Profesor: "Ing Garcia Macias Viviana Katiuska",
        },
        {
          Dia: "Lunes",
          hora: "10:00-12:00",
          Asignatura: "Fisica",
          Profesor: "Ing Walter Garcia",
        },
        {
          Dia: "Martes",
          hora: "8:00-10:00",
          Asignatura: "Metodología de la Investigación",
          Profesor: "PHD.Muñoz Verduga Dolores Esperanza",
        },
        {
          Dia: "Martes",
          hora: "10:00-12:00",
          Asignatura: "Algebra Lineal",
          Profesor: "Ing Mero Briones Henry Neurio",
        },
        {
          Dia: "Miercoles",
          hora: "8:00-10:00",
          Asignatura: "Fisica General",
          Profesor: "Ing Walter Garcia",
        },
        {
          Dia: "Miercoles",
          hora: "10:00-12:00",
          Asignatura: "Fundamentos de Programacion",
          Profesor: "ING Franco Pico Armando Gilberto",
        },
        {
          Dia: "Jueves",
          hora: "8:00-10:00",
          Asignatura: "Metodología de la Investigación",
          Profesor: "PHD.Muñoz Verduga Dolores Esperanza",
        },
        {
          Dia: "Jueves",
          hora: "10:00-12:00",
          Asignatura: "Fundamentos de tecnologías de la información",
          Profesor: "ING Garcia Macias Viviana Katiuska",
        },
        {
          Dia: "Viernes",
          hora: "8:00-10:00",
          Asignatura: "Algebra Lineal",
          Profesor: "Ing Mero Briones Henry Neurio",
        },
        {
          Dia: "Viernes",
          hora: "10:00-12:00",
          Asignatura: "Fundamentos de Programacion",
          Profesor: "ING Franco Pico Armando Gilberto",
        },
      ],
    },
  ];
   // Identificador de la tabla que se generará
  var tableId = "myTable";
  // Llamar a la función jsonToTable para generar la tabla HTML a partir de los datos JSON
  jsonToTable(jsonData, tableId);
}
/**
 * La función jsonToTable se encarga de generar una tabla HTML a partir de un objeto JSON y añadirla al elemento HTML especificado por tableId.
 */
function jsonToTable(jsonData, tableId) {
  var table = document.getElementById(tableId);

  // Crear el encabezado de la tabla
  var thead = document.createElement("thead");
  var headerRow = document.createElement("tr");
  var headers = Object.keys(jsonData[0].Horario[0]);

  headers.forEach(function (header) {
    var th = document.createElement("th");
    th.appendChild(document.createTextNode(header));
    headerRow.appendChild(th);
  });
   // Añadir el encabezado a la tabla
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Crear el cuerpo de la tabla
  var tbody = document.createElement("tbody");

  jsonData[0].Horario.forEach(function (item) {
    var row = document.createElement("tr");

    // Crear las celdas de cada fila
    headers.forEach(function (header) {
      var cell = document.createElement("td");
      cell.appendChild(document.createTextNode(item[header]));
      row.appendChild(cell);
    });

    // Añadir la fila al cuerpo de la tabla
    tbody.appendChild(row);
  });
    // Añadir el cuerpo a la tabla
    table.appendChild(tbody);
}

// En vista de que no se podia crear una nueva tabla usando codigo Javascript  de la primera tabla
// Se tuvo que reutilizar el codigo Javascript para la segunda tabla 
// Código de la segunda tabla JSON

/**
 * La función generarTabla2 se encarga de generar una tabla HTML a partir de un conjunto de datos JSON.
 */
function generarTabla2() {
  // Datos JSON que contienen la información de los horarios
  var jsonSecondData = [
    {
      Horario: [
        {
          Dia: "Lunes",
          hora: "8:00-10:00",
          Asignatura: "Estadistica Y Probabilidad ",
          Profesor: "Ing Rivadeneira Zambrano Fabricio Javier",
        },
        {
          Dia: "Lunes",
          hora: "10:00-12:00",
          Asignatura: "Matemáticas Discretas",
          Profesor: "Ing Mendoza Cuzme Luis Jacinto",
        },
        {
          Dia: "Martes",
          hora: "8:00-10:00",
          Asignatura: "Cálculo de una variable",
          Profesor: "Ing Garcia Velez Walter Colon",
        },
        {
          Dia: "Martes",
          hora: "10:00-12:00",
          Asignatura: "Estructura de datos",
          Profesor: "Ing Reyes Cardenas Jose Jacintoo",
        },
        {
          Dia: "Miercoles",
          hora: "8:00-11:00",
          Asignatura: "Sistema Electricos y Electronicos",
          Profesor: "Ing Mendoza Cuzme Luis Jacinto",
        },
        {
          Dia: "Miercoles",
          hora: "10:00-12:00",
          Asignatura: "Economia Global",
          Profesor: "Ing Macias Avila Carlos Andres ",
        },
        {
          Dia: "Jueves",
          hora: "8:00-10:00",
          Asignatura: "Cálculo de una variable",
          Profesor: "Ing Garcia Velez Walter Colon ",
        },
        {
          Dia: "Jueves",
          hora: "10:00-12:00",
          Asignatura: "Estadistica Y Probabilidad",
          Profesor: "Ing Rivadeneira Zambrano Fabricio Javier",
        },
        {
          Dia: "Viernes",
          hora: "8:00-10:00",
          Asignatura: "Matemáticas Discretas",
          Profesor: "Ing Mendoza Cuzme Luis Jacinto ",
        },
        {
          Dia: "Viernes",
          hora: "10:00-12:00",
          Asignatura: "Estructura de datos",
          Profesor: "Ing Reyes Cardenas Jose Jacinto",
        },
      ],

    },
  ];

  // Identificador de la tabla que se generará
  var tableId = "Tabla2";
    // Llamar a la función jsonToTable para generar la tabla HTML a partir de los datos JSON
  jsonToTables(jsonSecondData, tableId);
}

function jsonToTables(jsonSecondData, tableId) {
  var table = document.getElementById(tableId);

  // Crear el encabezado de la tabla
  var thead = document.createElement("thead");
  var headerRow = document.createElement("tr");
  var headers = Object.keys(jsonSecondData[0].Horario[0]);
   // Crear las celdas de encabezado de la tabla
  headers.forEach(function (header) {
    var th = document.createElement("th");
    th.appendChild(document.createTextNode(header));
    headerRow.appendChild(th);
  });
  // Añadir el encabezado a la tabla
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Crear el cuerpo de la tabla
  var tbody = document.createElement("tbody");
  // Iterar sobre los datos del JSON y crear las filas de la tabla
  jsonSecondData[0].Horario.forEach(function (item) {
    var row = document.createElement("tr");

    headers.forEach(function (header) {
      var cell = document.createElement("td");
      cell.appendChild(document.createTextNode(item[header]));
      row.appendChild(cell);
    });
    // Añadir la fila al cuerpo de la tabla
    tbody.appendChild(row);
  });
   // Añadir el cuerpo a la tabla
  table.appendChild(tbody);
}
