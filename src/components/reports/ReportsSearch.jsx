import React from 'react'
import './reports-search.css'

const ReportsSearch = props => (
  <form className='pure.form SearchForm'>
    <input type='search' id='search' name='search' onChange={props.onSearch} placeholder='Problematica' />
    <label>
      <i className='fa fa-search'> </i>
    </label>
  </form>
)

export default ReportsSearch
