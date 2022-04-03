import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ data }) => {
  const { idDrink: id, strDrinkThumb: img, strGlass: glass, strDrink: name, strAlcoholic: alcoholic } = data;
  return (
    <article className='cocktail'>
      <img src={img} alt={name} />
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{alcoholic}</p>
        <Link className='btn-primary' to={`cocktail/${id}`}>details</Link>
      </div>
    </article>
  )
}

export default Cocktail
