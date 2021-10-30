import React from 'react'
import ProductCard from '../productCard/ProductCard'
import "./collection.scss"

export default function Collection({collectionToRender, collectionName}) {
const renderProducts = () => {
return <div className="products-container">
{collectionToRender.products.map(({id, ...otherProps})=> <ProductCard key={id} {...otherProps} />)}
</div>}
    return (
       <div className="collection-container">
           <div className="collection-heading">
               <h1>{collectionToRender.title}</h1>
           <div className="head-hr"></div>
           </div>
           {renderProducts()}
       </div>
    )
}
