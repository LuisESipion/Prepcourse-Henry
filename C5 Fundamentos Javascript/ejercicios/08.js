function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:
  var p_int = Math.floor(numero)
  if (typeof numero != 'number') {
    return false
  } else {
    return numero - p_int === 0
  }
}

module.exports = esNumeroEntero;