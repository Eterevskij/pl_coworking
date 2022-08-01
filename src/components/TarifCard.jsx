import React from 'react';
import styles from './TarifCard.module.css';

import { ReactComponent as StandartTarif } from '../icons/StandartTarif.svg';
import { ReactComponent as VipTarif } from '../icons/VipTarif.svg';


const formatNum = (num) => {
    return num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ");
}

const TarifCard = (props) => {

    const { price, vip } = props;

    return (
        <div className={`${styles.tarifCard} ${vip ? styles.vip : ''}`}>

            <div className={styles.tarifCardHeader}>
                <p className={styles.tarifCardSubtitle}>Тариф</p>
                <p className={styles.tarifCardTitle}>«{vip ? 'VIP' : 'СТАНДАРТ'}»</p>
                {vip ?
                    <VipTarif className={styles.tarifCardPhoto} />
                    :
                    <StandartTarif className={styles.tarifCardPhoto} />

                }
            </div>

            <p className={styles.tarifCardListTitle}>Включает:</p>

            <ul className={styles.tarifCardList}>
                <li className={styles.tarifCardListItem}>Преимущество</li>
                <li className={styles.tarifCardListItem}>Преимущество</li>
                <li className={styles.tarifCardListItem}>Преимущество</li>
                <li className={styles.tarifCardListItem}>Преимущество</li>
                <li className={styles.tarifCardListItem}>Преимущество</li>
                <li className={styles.tarifCardListItem}>Преимущество</li>
            </ul>

            <div className={styles.tarifCardPriceWrapper}>
                <h5 className={styles.tarifCardPrice}>{formatNum(price)} ₽ / мес.</h5>
            </div>

        </div>
    )
}

export default TarifCard; 