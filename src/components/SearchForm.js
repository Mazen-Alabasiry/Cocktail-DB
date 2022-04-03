import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { searchText, handelSearchChange } = useGlobalContext();

  return (
    <section className='section search'>
      <form className='search-form'>
        <div className='form-control'>
          <label htmlFor='name'>Search Your Favorite Cocktail</label>
          <input id='name' value={searchText} onChange={handelSearchChange} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
