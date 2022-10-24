import React from 'react'
import connectMongoDB from '../../../config/connectMongoDB'
import Game from '../../../models/game'

function gameDetails({ game }) {
  return (
    <div
      style={{
        textAlign: 'center',
        backgroundColor: '#00e3ff',
        height: '700px',
      }}
    >
      <h1>Game details Page</h1>
      <h3>Name: {game.name}</h3>
      <p>Description: {game.description}</p>
      <p>Instruction: {game.instructions}</p>
      {/* <h4>Category: {game.category}</h4> */}
      <h4>User: {game.typeOfUser}</h4>
      <h4>Created: {game.createdAt}</h4>
      {/* <h4>Props: {game.props}</h4> */}
      <h4>Time for play: {game.proxPlayingTime}</h4>
      <h4>Min Age: {game.minAge}</h4>
    </div>
  )
}

export default gameDetails

export async function getServerSideProps(context) {
  await connectMongoDB()
  const { params } = context
  const gameId = params.gameId
  const data = await Game.findById(gameId)
  const game = JSON.stringify(data)

  return {
    props: {
      game: JSON.parse(game),
    },
  }
}
