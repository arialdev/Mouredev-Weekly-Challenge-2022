/*
 * Reto #25
 * PIEDRA, PAPEL, TIJERA
 * Fecha publicación enunciado: 20/06/22
 * Fecha publicación resolución: 27/06/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que calcule quien gana más partidas al piedra, papel, tijera.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "R" (piedra), "P" (papel) o "S" (tijera).
 * - Ejemplo. Entrada: [("R","S"), ("S","R"), ("P","S")]. Resultado: "Player 2".
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

function validateRockPaperScissors(movements) {
  const actions = {
    'R': 'S',
    'S': 'P',
    'P': 'R'
  };

  const result = movements.reduce((acc, [mov1, mov2]) => {
    if (actions[mov1] === mov2) {
      acc[0]++;
    } else {
      acc[1]++;
    }
    return acc;
  }, [0, 0]);
  if (result[0] > result[1]) {
    return 'Player 1';
  } else if (result[0] < result[1]) {
    return 'Player 2';
  }
  else return 'Tie';
}

module.exports = { validateRockPaperScissors };