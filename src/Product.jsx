import React from 'react'

function Product({age,data}) {
  return (
    <div className="w-full h-screen bg-zinc-900 p-4 text-white">
    <h1>{age}</h1>
    <h1>{data.age}</h1>
    <h1>{data.name}</h1>
    </div>
  )
}

export default Product