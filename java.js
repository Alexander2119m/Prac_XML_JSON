/**
 * La función cargarXML se encarga de cargar un archivo XML y mostrar su contenido en forma de tabla.
 */

function cargarXML(event) { /* El evento que desencadena la carga del archivo XML.  */
   // Obtener el archivo XML seleccionado
  var Primernivel = event.target.files[0];
  // Crear un objeto FileReader para leer el archivo XML
  var lector = new FileReader();
  lector.onload = function (e) {
      var xml = e.target.result;
      // Llamar a la función mostrarTabla para mostrar el contenido del XML en forma de tabla
      mostrarTabla(xml);
  };
  // Leer el archivo XML como texto
  lector.readAsText(Primernivel);
}
/**
 * En esta practica se uso dos archivos.JSON esta funcion se encargo de Generar el horario para el 2do Semestre
 * La función cargarXML se encarga de cargar un archivo XML y mostrar su contenido en forma de tabla.
 */
function cargarXML(event) { /* El evento que desencadena la carga del archivo XML.  */
  // Obtener el archivo XML seleccionado
  var Segundonivel = event.target.files[0];
    // Crear un objeto FileReader para leer el archivo XML
  var lector = new FileReader();
  lector.onload = function (e) {
      var xml = e.target.result;
      mostrarTabla(xml);
  };
  // Leer el archivo XML como texto
  lector.readAsText(Segundonivel);
}

function mostrarTabla(xml) {
  // Obtener el elemento en el que se mostrará la tabla
  var tablaContainer = document.getElementById("tablaContainer");
  // Crear el elemento de la tabla
  var tabla = document.createElement("table");

  // Procesar el XML y generar las filas y columnas de la tabla
  var xmlDoc = new DOMParser().parseFromString(xml, "text/xml");
  var horarios = xmlDoc.getElementsByTagName("Horario");
  
  for (var i = 0; i < horarios.length; i++) {
      var horario = horarios[i];

      // Crear una fila para cada horario
      var tr = document.createElement("tr");

      // Obtener los valores de cada elemento en el horario
      var dia = horario.getElementsByTagName("Dia")[0].textContent;
      var hora = horario.getElementsByTagName("hora")[0].textContent;
      var asignatura = horario.getElementsByTagName("Asignatura")[0].textContent;
      var nombreProf = horario.getElementsByTagName("NombreProf")[0].textContent;

      // Crear celdas para los valores y agregarlas a la fila
      var tdDia = document.createElement("td");
      tdDia.textContent = dia;
      tr.appendChild(tdDia);

      var tdHora = document.createElement("td");
      tdHora.textContent = hora;
      tr.appendChild(tdHora);

      var tdAsignatura = document.createElement("td");
      tdAsignatura.textContent = asignatura;
      tr.appendChild(tdAsignatura);

      var tdNombreProf = document.createElement("td");
      tdNombreProf.textContent = nombreProf;
      tr.appendChild(tdNombreProf);

      // Agregar la fila a la tabla
      tabla.appendChild(tr);
  }

  // Agregar la tabla al contenedor
  tablaContainer.appendChild(tabla);
}



