import React from 'react'
import '../BreadCrums/BreadCrums.css'
import arrow_icon from '../Assets/arrow.png'

const BreadCrums = (props) => {
    const {product} = props
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt=""/> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default BreadCrums;