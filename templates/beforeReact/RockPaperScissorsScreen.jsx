import React, { useState } from 'react';

export default function RockPaperScissorsScreen() {
  const [playerSelection, setPlayerSelection] = useState();
  const [machineSelection, setMachineSelection] = useState();
  const [response, setResponse] = useState();

  function playGame() {
    var arrayRobot = ['paper', 'rock', 'scissors'];

    var robotDecision =
      arrayRobot[Math.floor(Math.random() * arrayRobot.length)];

    var img = changeImg(robotDecision);
    imgRobot.src = img;

    if (
      (inputPlayer === 'paper' && robotDecision === 'rock') ||
      (inputPlayer === 'rock' && robotDecision === 'scissors') ||
      (inputPlayer === 'scissors' && robotDecision === 'paper')
    ) {
      result.innerHTML = 'Ganaste';
      playerPointsValue++;
      playerPointsElement.innerText = playerPointsValue;
    } else if (
      (inputPlayer === 'paper' && robotDecision === 'scissors') ||
      (inputPlayer === 'rock' && robotDecision === 'paper') ||
      (inputPlayer === 'scissors' && robotDecision === 'rock')
    ) {
      result.innerHTML = 'Gana el Robot';
      robotPointsValue++;
      robotPointsElement.innerText = robotPointsValue;
    } else {
      result.innerHTML = 'Empate';
    }

    if (playerPointsValue === 3 || robotPointsValue === 3) {
      playButton.style.display = 'none';
      restart.style.display = 'block';

      if (playerPointsValue === 3) {
        result.innerHTML = 'Fin de partida, Ganaste';
        window.open(
          'https://www.youtube.com/watch?v=dQw4w9WgXcQ&autoplay=1',
          '_blank'
        );
      } else {
        result.innerHTML = 'Fin de partida, Perdiste';
      }
    }
  }

  return (
    <>
      <h1>Piedra, Papel o Tijeras</h1>
      <table border="0" width="50%" cellspacing="50" className="mt-5">
        <tr>
          <td>
            <div>
              <div className="card" style={{ width: '18rem' }}>
                <img src="assets/img/papel.png" style={{ width: '18rem' }} />
                <div className="card-body">
                  <h5 className="card-title">
                    <h3>
                      Puntos: <span id="playerPoints">0</span>
                    </h3>
                  </h5>
                </div>
              </div>

              <select
                className="mt-3"
                onChange={(v) => setPlayerSelection(v)}
                required
              >
                <option value="paper" selected>
                  Papel
                </option>
                <option value="rock">Piedra</option>
                <option value="scissors">tijeras</option>
              </select>
              <div className="button mt-3">
                <button type="button" className="btn btn-dark" onClick={() => playGame()}>
                  Jugar
                </button>
                <a href="play.html" id="restart">
                  Reiniciar
                </a>
              </div>
            </div>
          </td>

          <td>
            <div className="card" style={{ width: '18rem' }}>
              <img src="assets/img/robot.jpg" style={{ width: '18rem' }} />
              <div className="card-body">
                <h5 className="card-title">
                  <h3>
                    Puntos: <span>0</span>
                  </h3>
                </h5>
              </div>
            </div>
          </td>
        </tr>
      </table>

      <p></p>
    </>
  );
}
