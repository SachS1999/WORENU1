import React from 'react'

function FlipCard(props) {
  return (
    <div id="flip-card" className='mx-auto'>
        <div id="flip-card-inner">
            <div id="flip-card-front">
                <img src={props.image} alt="Avatar" style={{width:"300px", height:"300px"}} />
                <h5 className=''>{props.title}</h5> 
                <p className=''>{props.subtitle}</p>
            </div>
            <div id="flip-card-back">
                <p className='mt-5'>Description</p>
            </div>
        </div>
    </div>
  )
}

export default FlipCard