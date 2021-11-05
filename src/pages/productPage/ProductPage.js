import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import OfferHeader from '../../components/offerHeader/OfferHeader'
import ProductPreview from '../../components/productPreview/ProductPreview'
import SponsoredProduct from "../../components/sponsoredProduct/SponsoredProduct"
import {ReactComponent as TruckIcon} from "../../assets/images/truck.svg"

export default function ProductPage({match:{params}}) {
    const products = useSelector(state=>state.products)
    const productToRender = products[params.productId]
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            <OfferHeader>Get 25% Off On All Your Orders Above $300/- & Free Delivery <TruckIcon /></OfferHeader>
            <div style={{display:"flex", justifyContent:"space-between"}}>
            <div><ProductPreview productDetails={productToRender} id={params.productId}/></div>
            <div style={{padding:"50px 20px",boxShadow: "1px 2px 3px #00000047"}}><SponsoredProduct /></div>
            </div>
        </div>
    )
}

