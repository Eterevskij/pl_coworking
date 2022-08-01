import React from 'react';
import { Modal, Radio, Button } from 'antd';
import styles from './ChooseSubscibeTerm.module.css';

import { ReactComponent as Card } from '../../icons/CreditCard.svg';
import { ReactComponent as Wallet } from '../../icons/Wallet.svg';
import { ReactComponent as RadioButton } from '../../icons/RadioButton.svg';


const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ");
}

const ChooseSubscibeTerm = (props) => {

    return (
        <Modal className={styles.modal}
            visible={true}
            footer={null}>
            <p className={styles.title}>Выберите срок подписки</p>
            <p className={styles.subtitle}>Чем больше срок, тем дешевле обходится стоимость одного дня</p>

            <div className={styles.tarifCards}>

                <div className={styles.tarifCardsWrapper}>

                    <div className={styles.tarifCard}>

                        <div className={styles.tarifCard__top}>
                            <p className={styles.tarifCard__top__price}>3 500 ₽</p>
                        </div>

                        <div className={styles.tarifCard__bottom}>

                            <Button className={`${styles.tarifCard__bottom__button} ${styles.term}`}>1 месяц</Button>
                            <Button className={`${styles.tarifCard__bottom__button} ${styles.buy}`}>Купить</Button>

                        </div>


                    </div>


                </div>


                <div className={styles.tarifCardsWrapper}>

                    <div className={styles.tarifCard}>

                        <div className={styles.tarifCard__top}>
                            <p className={styles.tarifCard__top__price}>3 500 ₽</p>
                        </div>

                        <div className={styles.tarifCard__bottom}>

                            <Button className={`${styles.tarifCard__bottom__button} ${styles.term}`}>1 месяц</Button>
                            <Button className={`${styles.tarifCard__bottom__button} ${styles.buy}`}>Купить</Button>

                        </div>


                    </div>


                </div>


                <div className={styles.tarifCardsWrapper}>

                    <div className={styles.tarifCard}>

                        <div className={styles.tarifCard__top}>
                            <p className={styles.tarifCard__top__percent}>-5%</p>
                            <p className={styles.tarifCard__top__price}>3 500 ₽</p>
                            <p className={styles.tarifCard__top__discount}>4 500 ₽</p>
                        </div>

                        <div className={styles.tarifCard__bottom}>

                            <Button className={`${styles.tarifCard__bottom__button} ${styles.term}`}>1 месяц</Button>
                            <Button className={`${styles.tarifCard__bottom__button} ${styles.buy}`}>Купить</Button>

                        </div>


                    </div>


                </div>


            </div>

        </Modal>
    )
}

export default ChooseSubscibeTerm; 