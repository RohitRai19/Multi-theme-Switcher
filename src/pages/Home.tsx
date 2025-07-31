import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

export default function Home() {
  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(setProducts)
  }, [])

  return (
    <div className="pt-20 px-4">
      <h1 className="text-3xl font-bold mb-4">Home</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
