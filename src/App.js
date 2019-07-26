import React, { Component } from 'react'
import DealerHand from './components/DealerHand'
import PlayerHand from './components/PlayerHand'

class App extends Component {
  // shuffleDeck = () => {
  //     for(let i = deck.length — 1; i > 0; i--){
  //     const j = Math.floor(Math.random() * deck.length)
  //     const temp = deck[i]
  //     deck[i] = deck[j]
  //     deck[j] = temp
  //   }
  // }

  render() {
    return (
      <>
        <section className="header">
          <h1>Blackjack</h1>
        </section>
        <section className="playing-section">
          <section>
            <DealerHand />
          </section>
          <section>
            <PlayerHand />
          </section>
        </section>
        <section>
          <h1 className="winner-section">
            The Winner is : <span className="winner"> </span>
          </h1>
        </section>
      </>
    )
  }
}

export default App
