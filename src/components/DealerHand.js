import React, { Component } from 'react'

class DealerHand extends Component {
  render() {
    return (
      <>
        <section>
          <h1 className="title">Dealer's Hand</h1>
          <img className="card-placeholder" />
          <p className="total">
            Dealer's Total: <span>0</span>
          </p>
        </section>
      </>
    )
  }
}

export default DealerHand
