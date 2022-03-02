import React from 'react';
import { useState } from 'react';

import styles from './App.module.css'
import { Box } from './components/Box';
import { levels, Calculate, LevelType } from './helpers/imc';

import arrow from './assets/leftarrow.png';
import logo from './assets/powered.png';

const App = () => {

  const [peso, setPeso] = useState<number>(0);
  const [altura, setAltura] = useState<number>(0);
  const [toShow, setToShow] = useState<LevelType | null>(null);

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

    setToShow(Calculate(altura, peso));    
  }

  const PREV = () => {
    setToShow(null);
    setAltura(0);
    setPeso(0);    
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
                value={(altura > 0) ? altura : ''}
                onChange={HALTURA}
                placeholder="Informe sua altura"
                disabled={(toShow) ? true : false}
              />
            </div>

            <div className={styles.item}>
              <input
                type="number"
                value={(peso > 0) ? peso : ''}
                onChange={HPESO}
                placeholder="Informe seu peso"
                disabled={(toShow) ? true : false}
              />
            </div>

          </div>
          <button disabled={(toShow) ? true : false} onClick={HandleClick} className={styles.button}>Calcular</button>
        </div>

        {!toShow &&
          <div className={styles.right}>
            <div className={styles.grid}>
              {levels.map((level, index) => (
                <Box key={index} item={level} />
              ))}
            </div>
          </div>
        }

        {toShow &&
          <div className={styles.BIG}>
            <div className={styles.PREV} onClick={PREV}>
              <img src={arrow} width={25} />
            </div>
            <Box item={toShow} />
          </div>
        }

      </main >
    </div >
  );
}

export default App;