export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="border p-4 rounded shadow">
      <img src={product.image} alt={product.title} className="h-32 mx-auto object-contain" />
      <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
      <p className="text-sm">{product.description.slice(0, 80)}...</p>
      <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">Buy</button>
    </div>
  )
}
