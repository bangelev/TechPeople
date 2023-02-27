import Game from '../../models/game'
import { Grid, Container } from '@nextui-org/react'
import connectMongoDB from '../../config/connectMongoDB'
import GameCard from '../../components/games/GameCard'

import Head from 'next/head'

function games({ games }) {
  return (
    <>
      <Head>
        <title>Games</title>
      </Head>

      <h3 style={{ textAlign: 'center' }}>Here should be listed the GAMES </h3>
      <Grid.Container gap={2} justify="space-around" alignItems="center">
        {games.map((game, index) => {
          return (
            <Grid key={game._id}>
              <GameCard game={game} />
            </Grid>
          )
        })}
      </Grid.Container>
    </>
  )
}

export default games

export async function getServerSideProps() {
  try {
    await connectMongoDB()
    const data = await Game.find()
    const games = JSON.stringify(data)

    return {
      props: {
        games: JSON.parse(games),
      },
    }
  } catch (error) {
    console.log(error)
  }
}
