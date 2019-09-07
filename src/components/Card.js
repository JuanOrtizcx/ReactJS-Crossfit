import React from 'react'
import pesas from '../img/pesas.png'
import './styles/Card.css'

class Card extends React.Component {
  render(){
    return (
      <div className='card mx-auto Fitness-Card'>
        <div className="card-bod">
          <div calssName="row center">
            <div className="col-6">
              <img src={pesas} className="float-rigth Fitness-Img"/>
            </div>
            <div className="col-6 Fitness-Card-Info">
              <h1>Technique JMOL</h1>
              <p>Learn amazing street workout and calisthenics</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card
