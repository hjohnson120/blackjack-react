import React, { Component } from 'react'

class PlayerHand extends Component {
  render() {
    return (
      <>
        <section>
          <h1 className="title">Player's Hand</h1>
          <img className="card-placeholder" />
          <p className="total">
            Player's Total: <span>0</span>
          </p>
        </section>
      </>
    )
  }
}

export default PlayerHand
