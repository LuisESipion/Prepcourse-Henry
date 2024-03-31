function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
  var currentDate = new Date()
  if (currentDate.getFullYear() - fechaNacimiento.getFullYear() == 18) {
    if (currentDate.getMonth() == fechaNacimiento.getMonth()) {
      if (currentDate.getDate() >= fechaNacimiento.getDate()) {
        return true
      } else {
        return false
      }
    } else if (currentDate.getMonth() > fechaNacimiento.getMonth()) {
      return true
    } else {
      return false
    }
  } else if (currentDate.getFullYear() - fechaNacimiento.getFullYear() > 18) {
    return true
  } else {
    return false
  }
}

module.exports = esMayorDeEdad;