import React from 'react'
import "./successMsg.scss"
import {ReactComponent as SuccessIcon} from "../../assets/images/success.svg"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from 'react-redux';
import { emptyCart } from '../../redux/actions';

export default function SuccessMsg() {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(emptyCart())
    }
    return (
        <div className="msg-container">
           <SuccessIcon />
          <div className="msg-text"> Your order has been Placed. Thank you for choosing Eternity Clothing.</div> 
          <Link to="/" onClick={handleClick} className="done-btn">Done</Link>
          
        </div>
    )
}
