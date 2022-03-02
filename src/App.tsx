import React from 'react';
import { useState, useReducer } from 'react';

import styles from './App.module.css'
import { Box } from './components/Box';
import { levels, Calculate } from './helpers/imc';

import down from './assets/down.png';
import leftarrow from './assets/leftarrow.png';
import logo from './assets/powered.png';
import up from './assets/up.png';

const App = () => {

  const [peso, setPeso] = useState<number>(0);
  const [altura, setAltura] = useState<number>(0);

  const HPESO = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPeso(parseFloat(event.target.value));
  }

  const HALTURA = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAltura(parseFloat(event.target.value));
  }

  const HandleClick = () => {

    if (!peso || !altura) {
      alert("Erro, informe todos los campos");
      return;
    }

    const result = Calculate(altura, peso);

  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={logo} />
        </div>
      </header>
      <main className={styles.container}>
        <div className={styles.left}>
          <h1>Calcule o seu IMC.</h1>
          <p>
            IMC é a sigla para Índece de Massa Coporéa, parametro
            adotado pela organização Mundial da Saúde para
            calcular o peso de cada pessoa.
          </p>
          <div className={styles.inputs}>

            <div className={styles.item}>
              <input
                type="number"
                value={(peso > 0) ? peso : ''}
                onChange={HPESO}
                placeholder="Informe seu peso"
              />
            </div>

            <div className={styles.item}>
              <input
                type="number"
                value={(altura > 0) ? altura : ''}
                onChange={HALTURA}
                placeholder="Informe sua altura"
              />
            </div>

          </div>
          <button onClick={HandleClick} className={styles.button}>Calcular</button>
        </div>
        <div className={styles.right}>
          <div className={styles.grid}>

            {levels.map((level, index) => (
              <Box key={index} item={level} />
            ))}

          </div>
        </div>
      </main >
    </div >
  );
}

export default App;