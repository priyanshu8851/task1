import React from 'react'
import "./card.css"
const Card = (props) => {
  return (
    <>
    <div className="card">
            <img src={props.img} alt="User Images"/>
        <div className="card-info">
            <h2>{props.name}</h2>
            <p>{props.number}</p> 
            <p>{props.gender}</p> 
        </div>
    </div> 
    </>
  )
}

export default Card
