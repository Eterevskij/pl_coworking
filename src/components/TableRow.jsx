import React, { useState } from 'react';
import { Collapse, Button } from 'antd';
import styles from './TableRow.module.css';
import { ReactComponent as Close } from '../icons/Close.svg';
import { ReactComponent as Expand } from '../icons/Expand.svg';


const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ");
}

const statuses = {
    paid: { text: 'Оплачено', color: '#4DB663' },
    error: { text: 'Ошибка', color: '#F44F5A' },
    processing: { text: 'В обработке', color: '#F4B71A' }
}

const { Panel } = Collapse;

const TableRow = (props) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const expandToggle = () => {
        setIsExpanded(!isExpanded);
    }

    const { header, date, taridAndID, price, paymentMethod, term, status } = props;

    return (
        <div className={`${styles.paymentHistory__table__row} ${header ? styles.header : ''} ${isExpanded ? styles.expanded : ''}`}>

            <div className={`${styles.paymentHistory__table__col} ${styles.date}`}>
                <p>{date}</p>
            </div>  {/* Дата */}

            <div className={`${styles.paymentHistory__table__col} ${styles.taridAndID}`}>
                {!header ?
                    <span>
                        <p className={styles.tarif}>«{taridAndID.tarif}»</p>
                        <p className={styles.id}>ID {taridAndID.id}</p>
                    </span>
                    :
                    <p>{taridAndID}</p>
                }
            </div> {/* Тариф и ID */}

            <div className={`${styles.paymentHistory__table__col} ${styles.price} ${styles.desktop}`}>
                <p>{formatNumber(price)} {!header && '₽'}</p>
            </div> {/* Стоимость */}

            <div className={`${styles.paymentHistory__table__col} ${styles.paymentMethod} ${styles.desktop}`}>
                <p>{paymentMethod}</p>
            </div> {/* Способ оплаты */}

            <div className={`${styles.paymentHistory__table__col} ${styles.term}`}>
                <p>{term} {!header && 'дней'}</p>
            </div> {/* Срок */}

            <div className={`${styles.paymentHistory__table__col} ${styles.status}`}>
                <p className={styles[status]}>{header ? status : statuses[status].text}</p>
            </div> {/* Статус */}

            {!header &&
                <>
                    <div className={`${styles.paymentHistory__table__col} ${styles.expandButton}`}>
                        <Button className={isExpanded ? styles.open : styles.close}
                            onClick={expandToggle}>
                            {
                                isExpanded ?
                                    <Close /> :
                                    <Expand />
                            }
                        </Button>
                    </div> {/* Кнопка расширения */}


                    <div className={`${styles.paymentHistory__table__col} ${styles.mobileDetails}`}>
                        <Collapse className={styles.mobileDetails__сollapse} activeKey={Number(isExpanded)}>
                            <Panel header="This is panel header 1" key="1">

                                <div className={styles.mobileDetails__сollapseWrapper}>

                                    <div className={styles.mobileDetails__сollapseItemWrapper}>

                                        <div className={styles.mobileDetails__сollapseItem}>
                                            <p className={styles.name}>Стоимость</p>
                                            <p className={styles.value}>{formatNumber(price)} ₽</p>
                                        </div>

                                    </div>

                                    <div className={styles.mobileDetails__сollapseItemWrapper}>

                                        <div className={styles.mobileDetails__сollapseItem}>
                                            <p className={styles.name}>Способ оплаты</p>
                                            <p className={styles.value}>{paymentMethod}</p>
                                        </div>

                                    </div>

                                    <div className={`${styles.mobileDetails__сollapseItemWrapper} ${styles.term}`}>

                                        <div className={styles.mobileDetails__сollapseItem}>
                                            <p className={styles.name}>Срок</p>
                                            <p className={styles.value}>{term} дней</p>
                                        </div>

                                    </div>

                                </div>

                            </Panel>
                        </Collapse>
                    </div>
                </>
            }

        </div>
    )
}

export default TableRow;