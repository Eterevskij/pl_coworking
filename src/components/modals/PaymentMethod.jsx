import React from 'react';
import { Modal, Radio, Button } from 'antd';
import styles from './PaymentMethod.module.css';

import { ReactComponent as Card } from '../../icons/CreditCard.svg';
import { ReactComponent as Wallet } from '../../icons/Wallet.svg';
import { ReactComponent as RadioButton } from '../../icons/RadioButton.svg';


const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ");
}

const PaymentMethod = (props) => {

    return (
        <Modal className={styles.modal}
            visible={true}
            footer={null}>
            <p className={styles.title}>Способ оплаты</p>
            <p className={styles.subtitle}>Выберите удобный способ оплаты. Вы можете оплатить всю сумму бонусами со своего счета.</p>

            <Radio.Group className={styles.list}>

                <Radio.Button className={styles.listItem} value='card'>
                    <div className={styles.listItemContainer}>

                        <div className={styles.left}>

                            <RadioButton />
                            <div className={styles.left__text}>
                                <p className={styles.listItem__text__title}>Оплата онлайн</p>
                                <p className={styles.listItem__text__subtitle}>Банковской картой</p>
                            </div>
                        </div>

                        <div className={styles.right}>
                            <Card />
                        </div>

                    </div>
                </Radio.Button>

                <Radio.Button className={styles.listItem} value='balance'>
                    <div className={styles.listItemContainer}>

                        <div className={styles.left}>

                            <RadioButton />
                            <div className={styles.left__text}>
                                <p className={styles.listItem__text__title}>Оплата с баланса ЛК</p>
                                <p className={styles.listItem__text__subtitle}>Доступно: <span className={styles.price}>{formatNumber(180)} ₽</span></p>
                            </div>
                        </div>

                        <div className={styles.right}>
                            <Wallet />
                        </div>

                    </div>
                </Radio.Button>

            </Radio.Group>

            <div className={styles.totalPayment}>
                <p className={styles.totalPayment__name}>Итого к оплате:</p>
                <p className={styles.totalPayment__value}>3 500 ₽</p>
            </div>

            <Button className={styles.payButton}>Оплатить</Button>

        </Modal>
    )
}

export default PaymentMethod; 