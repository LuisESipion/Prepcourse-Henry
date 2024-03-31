function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  function isPrime(num, div = 2) {
    if (num <= 1) {
      return false
    }
    if (num===div) {
      return true
    }
    if (num%div===0) {
      return false
    }
    return isPrime(num,div+1)
  }
  return isPrime(numero)
}

module.exports = esNumeroPrimo;
