import { LevelType } from '../../helpers/imc';

import styles from './box.module.css';

import up from '../../assets/up.png'
import down from '../../assets/down.png'

type BoxType = {
    item: LevelType
}

export const Box = ({ item }: BoxType) => {
    return (
        <div className={styles.BOX} style={{ background: item.color }} >
            <div className={styles.IMG}>
                <img src={(item.icon == 'up') ? up : down} />
            </div>

            {item.yourIMC &&
                <div className={styles.YOURIMC}>
                    Seu IMC: {item.yourIMC.toFixed(2)} KG/m²
                </div>
            }

            <h2 className={styles.TITLE}>{item.title}</h2>
            <h3 className={styles.DESC}>IMC está entre {item.imc[0]} e {item.imc[1]}</h3>
        </div>
    );
}