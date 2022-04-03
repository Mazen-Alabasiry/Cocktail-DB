import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
const SingleCocktail = () => {
  let { id } = useParams()
  let cocktailURL = `${url + id}`;
  const [cocktailDetails, setCocktailDetails] = useState({})
  //
  useEffect(() => {
    fetchApi();
  }, [])
  //
  const fetchApi = async () => {
    const response = await fetch(cocktailURL);
    const resJson = await response.json();
    setCocktailDetails(resJson.drinks[0])
  }
  //
  if (cocktailDetails.idDrink === undefined) {
    return <Loading section='cocktail-page' />
  }

  const { strDrinkThumb: img, strGlass: glass, strDrink: name, strAlcoholic: alcoholic,
    strCategory: category, strInstructions: instructions, strIngredient1: Ingredient1, strIngredient2: Ingredient2 } = cocktailDetails;
  return (
    <section className='section cocktail-section'>
      <h1 className='section-title'>{name} </h1>
      <div className='drink'>
        <img src={img} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name:</span>
            {name}
          </p>
          <p>
            <span className='drink-data'>category:</span>
            {category}
          </p>
          <p>
            <span className='drink-data'>Info:</span>
            {alcoholic}
          </p>
          <p>
            <span className='drink-data'>Glass:</span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>Instructions:</span>
            {instructions}
          </p>
          <p>
            <span className='drink-data'>Ingredients:</span>
            {Ingredient1}, {Ingredient2}
          </p>
        </div>
      </div>
      <Link className='btn-primary' to='/'> back home</Link>
    </section>
  )
}

export default SingleCocktail
