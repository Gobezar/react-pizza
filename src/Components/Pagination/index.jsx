import React from 'react'
import { useDispatch } from "react-redux";
import {setPage} from '../../redux/slices/paginationSlice'

import styles from './Pagination.module.scss'

const Pagination = ({page}) => {


const dispatch = useDispatch();

    return (
        <ul className={styles.pagination}>
            {[...Array(2)].map((_, i) => (
                <li
                    key={i}
                    onClick={() => dispatch(setPage(i + 1))}
                    className={page === (i + 1) ? `${styles.active}` : ''}>{i + 1}</li>
            ))}
        </ul>

    )
}

export default Pagination