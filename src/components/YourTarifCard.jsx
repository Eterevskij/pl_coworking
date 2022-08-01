import React from 'react';
import { Button, Tag } from 'antd';
import styles from './YourTarifCard.module.css';

import { ReactComponent as Active } from '../icons/status/Active.svg';
import { ReactComponent as NotActive } from '../icons/status/NotActive.svg';

import { ReactComponent as MapMarker } from '../icons/MapMarker.svg';
import { ReactComponent as PayArrow } from '../icons/PayArrow.svg';



const YourTarifCard = (props) => {

    const { isActive } = props;

    return (
        <div className={styles.yourTarifCard}>
            {
                isActive ?
                    <Tag icon={<Active />} className={`${styles.yourTarifCard__status} ${styles.active}`}>Активный</Tag>
                    :
                    <Tag icon={<NotActive />} className={styles.yourTarifCard__status}>Не активен</Tag>

            }
            <p className={styles.yourTarifCard__title}><span className={styles.main}>Ваш тариф</span> <span className={styles.accent}>«СТАНДАРТ»</span></p>

            <div className={styles.yourTarifCard__footer}>

                <div className={styles.left}>
                    <Button className={`${styles.yourTarifCard__button} ${styles.location}`} icon={<MapMarker />}>Ростов-на-Дону</Button>
                </div>

                <div className={styles.right}>
                    <Button className={`${styles.yourTarifCard__button} ${styles.pay}`}>Оплатить <PayArrow /> </Button>
                </div>

            </div>
        </div>
    )
}

export default YourTarifCard;