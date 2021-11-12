import React, { useState } from 'react'
import Arrow from '../slider/Arrow'
import "./bannerSlider.scss"

const banners = [
    {img: "/images/banner1.jpg"},
    {img: "/images/banner2.jpg"},
    {img: "/images/banner3.jpg"},
]
export default function BannerSlider() {
    const [currentIndx, setCurrentIndx] = useState(1)
    return (
        <div className="banner-container">
            <div className="banner-img" style={{backgroundImage:`url(${process.env.PUBLIC_URL + `${banners[currentIndx].img}`})`}}></div>
            <Arrow length={banners.length} indx={currentIndx} setIndx={setCurrentIndx}/>
        </div>
    )
}
