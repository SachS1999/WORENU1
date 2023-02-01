import React from 'react'

function Occasion() {
  return (
    <div>
            <button type="button" className="btn btn-primary rounded-5 mx-1" style={{fontSize: "12px"}}>Wedding</button>
            <button type="button" className="btn btn-secondary rounded-5 mx-1" style={{fontSize: "12px"}}>Job fair</button>
            <button type="button" className="btn btn-success rounded-5 mx-1" style={{fontSize: "12px"}}>Coffee Date</button>
            <button type="button" className="btn btn-danger rounded-5 mx-1" style={{fontSize: "12px"}}>Party</button>
            <button type="button" className="btn btn-warning rounded-5 mx-1" style={{fontSize: "12px"}}>Dinner date</button>
            <button type="button" className="btn btn-info rounded-5 mx-1" style={{fontSize: "12px"}}>Presentation</button>
    </div>
  )
}

export default Occasion