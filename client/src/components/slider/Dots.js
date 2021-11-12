import React from 'react'
import "./dots.scss"
export default function Dots({setIndex, index, length}) {
    const render = () => {
        const dots = []
        for (let i = 0; i < length; i++) {
            dots.push(
                <button
                    key={i}
                    className={`dot ${i === index ? 'active' : ''}`}
                    onClick={() => setIndex(i)}>
                </button>
            )
        }
        return dots
    }
    return (
        <div>
       {render()}
        </div>
    )
}
