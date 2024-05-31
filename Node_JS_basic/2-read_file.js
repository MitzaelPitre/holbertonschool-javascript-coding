const fs = require('fs');

function countStudents(path) {
  try {
    // Leer el archivo de manera síncrona
    const data = fs.readFileSync(path, 'utf8');

    // Dividir el archivo en líneas y eliminar las líneas vacías
    const lines = data.split('\n').filter(line => line.trim() !== '');

    // Contadores para cada campo
    let csCount = 0;
    let sweCount = 0;

    // Arrays para almacenar los nombres de estudiantes en cada campo
    const csStudents = [];
    const sweStudents = [];

    // Recorrer todas las líneas del archivo
    lines.forEach(line => {
      // Dividir cada línea en columnas utilizando coma como delimitador
      const [firstname, lastname, age, field] = line.split(',');

      // Incrementar el contador apropiado y agregar el nombre de estudiante al array apropiado
      if (field === 'CS') {
        csCount++;
        csStudents.push(firstname);
      } else if (field === 'SWE') {
        sweCount++;
        sweStudents.push(firstname);
      }
    });

    // Imprimir el número total de estudiantes y la lista de estudiantes para cada campo
    console.log(`Number of students: ${lines.length}`);
    console.log(`Number of students in CS: ${csCount}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${sweCount}. List: ${sweStudents.join(', ')}`);
  } catch (error) {
    // Capturar y manejar errores al leer el archivo
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
