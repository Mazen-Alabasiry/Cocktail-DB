import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='error-page section'>
      <div className='error-container'>
        <h2>404</h2>
        <h2>wrong path!! </h2>
        <Link className='btn' to='/'>BackHome</Link>
      </div>
    </div>
  )
}

export default Error
