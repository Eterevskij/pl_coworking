import React from 'react';
import { Input, Select } from 'antd';
import styles from './CardHeader.module.css';

import { ReactComponent as Sort } from '../icons/Sort.svg';

const { Option } = Select;

const sortOptions = [{
    value: 'default',
    text: 'По умолчанию',
    default: true
},
{
    value: 'date',
    text: 'По дате',
},
{
    value: 'price',
    text: 'По цене',
},
]

const CardHeader = (props) => {

    const {totalText, totalNum} = props;

    const defaultSortValue = sortOptions.find(item => {
        return item.default;
    }).value;

    return (
        <div className={styles.cardsNumAndSort}>

            <div className={styles.sortWrapper}>

                <Input.Group className={styles.sort}>

                    <Sort className={styles.sortIcon} />

                    <Select
                        defaultValue={defaultSortValue}
                        className={styles.sortSelect}>
                        {
                            sortOptions.map(option => {
                                return (
                                    <Option value={option.value}>{option.text}</Option>
                                )
                            })
                        }
                    </Select>

                </Input.Group>

            </div>

            <div className={styles.totalAdWrapper}>
                <p className={styles.totalAd}>{totalText}: <span className={styles.num}>{totalNum}</span></p>
            </div>
        </div>

    )
}

export default CardHeader; 