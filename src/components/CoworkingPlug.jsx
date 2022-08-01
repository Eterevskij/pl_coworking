import React from 'react';
import { Button } from 'antd';
import styles from './CoworkingPlug.module.css';

import TarifCard from './TarifCard';

import { ReactComponent as BackArrow } from '../icons/BackArrow.svg';
import { ReactComponent as CoworkingBG } from '../icons/CoworkingBG.svg';


const CoworkingPlug = () => {

    return (
        <div className={styles.coworkingPlugWrapper}>
            <div className="container">
                <Button className={styles.backButton} icon={<BackArrow />}>Вернуться на главную</Button>

                <h4 className={styles.title}>Коворкинг в твоем городе</h4>

                <div className={styles.descriptionCardWrapper}>
                    <div className={styles.descriptionCard}>
                        <div className={styles.left}>
                            <h5 className={styles.descriptionCardTitle}>Как оформить подписку на коворкинг ?</h5>
                            <p className={styles.descriptionCardSubtitle}>Текст-заполнитель — это текст, который имеет некоторые характеристики реального письменного текста, но является случайным набором слов или сгенерирован иным образом. Его можно использовать для отображения образца шрифтов, создания текста для тестирования или обхода спам-фильтра.</p>
                            <Button className={styles.descriptionCardButton}>Оставить заявку</Button>
                        </div>

                        <div className={styles.right}>
                            <CoworkingBG className={styles.descriptionCardPhoto} />
                        </div>

                    </div>
                </div>

                <div className={styles.tarifCardsBlock}>

                    <div className={styles.tarifCardWrapper}>

                        <TarifCard price={3500} />

                    </div>

                    <div className={styles.tarifCardWrapper}>

                        <TarifCard vip price={5000} />

                    </div>

                </div>
            </div>
        </div>
    )
}

export default CoworkingPlug; 