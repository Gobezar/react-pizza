import React, { useState, useContext, useCallback } from 'react'
import styles from './Search.module.scss'
import { SearchContext } from '../../App.js'
import debounce from 'lodash.debounce'

const Search = () => {
  const { setSearchValue } = useContext(SearchContext)
  const [ value, setValue ] = useState('')


  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str)
    }, 350),
    [],
  );
   
  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value)
  };


  return (
    <div>
      <input 
        value={value}
        onChange={onChangeInput}
        className={styles.root}
        placeholder='Введите название пиццы...'
      />
    </div>
  )
}

export default Search