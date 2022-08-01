import React from 'react';
import { Button } from 'antd';
import styles from './Coworking.module.css';

import YourTarifCard from './YourTarifCard';
import CardHeader from './CardHeader';
import TableRow from './TableRow';


import { ReactComponent as BackArrow } from '../icons/BackArrow.svg';

const rows = [
    {
        date: '08.04.2021',
        taridAndID: { tarif: 'Стандарт', id: 34243243243242 },
        price: 3500,
        paymentMethod: 'С баланса',
        term: 30,
        status: 'processing'
    },
    {
        date: '08.04.2021',
        taridAndID: { tarif: 'Стандарт', id: 34243243243242 },
        price: 21000,
        paymentMethod: 'Банковская карта',
        term: 180,
        status: 'error'
    },

]


const Coworking = () => {

    return (
        <div className={styles.coworkingPlugWrapper}>
            <div className="container">
                <Button className={styles.backButton} icon={<BackArrow />}>Вернуться на главную</Button>

                <h4 className={styles.title}>Коворкинг в твоем городе</h4>

                <div className={styles.yourTarifCard__wrapper}>
                    <YourTarifCard isActive={true} />
                </div>

                <div className={styles.paymentHistory}>
                    <h5 className={styles.paymentHistory__title}>История платежей</h5>

                    <div className={styles.cardHeader__wrapper}>
                        <CardHeader totalText={"Всего платежей"} totalNum={13} />
                    </div>

                    <div className={styles.paymentHistory__table}>

                        <TableRow header
                            date={'Дата'}
                            taridAndID={'Тариф и ID платежа'}
                            price={'Стоимость'}
                            paymentMethod={'Способ оплаты'}
                            term={'Срок'}
                            status={'Статус'} />


                        {
                            rows.map(row => {
                                return (
                                    <TableRow {...row} />
                                )
                            })
                        }

                    </div>

                </div>


            </div>
        </div>
    )
}

export default Coworking;