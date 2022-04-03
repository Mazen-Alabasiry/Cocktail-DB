import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { cocktailList, loading } = useGlobalContext();
  if (cocktailList === null) {
    return (
      <h1 className='section-title'>sorry, No Cocktails Matched Your Search Criteria</h1>
    )
  }

  return (
    <section className='section'>
      <h1 className='section-title'>Cocktails</h1>
      <div className='cocktails-center'>
        {loading ? <Loading section='home-page' /> : cocktailList.map(cocktail => <Cocktail key={cocktail.idDrink} data={cocktail} />)}
      </div>
    </section>
  )
}

export default CocktailList
