import React from 'react'
import useFetch from './hooks/useFetch'
import './index.css'

const App = () => {
  const { data, loading, error } = useFetch('https://api.escuelajs.co/api/v1/products')

  if (loading) return <p className="loading">Loading...</p>
  if (error) return <p className="error">Error: {error}</p>

  return (
    <div className="container">
      <h1>Product Gallery</h1>
      <div className="grid">
        {data.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.images?.[0]} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
