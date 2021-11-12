import React from 'react'
import "./arrow.scss"
export default function Arrow({length, indx, setIndx}) {

    const decreaseIndx = () => {
        if(indx===0) {
           setIndx(2)
           return ;
        }
        setIndx(indx-1)
    }
    const IncreaseIndx = () => {
        if(indx===2) {
            setIndx(0)
            return ;
        }
        setIndx(indx+1)
    }

    return (
        <div className="arrow-container">
            <div className="arrow" onClick={decreaseIndx}>&#8672;</div>
            <div className="arrow" onClick={IncreaseIndx}>&#8674;</div>
        </div>
    )
}
