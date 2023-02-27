import React from 'react'
import { Grid, Text, Container } from '@nextui-org/react'
import GameInstruction from './gameDetailsComponents/GameInstruction'

import GameRating from './gameDetailsComponents/GameRating'
import GameCollage from './gameDetailsComponents/GameCollage'

function GameDetails({ game }) {
  return (
    <>
      <Text b h1 css={{ textAlign: 'center', fontSize: '$3xl' }}>
        {game.name}
      </Text>
      <Grid.Container gap={1} justify="space-evenly" alignItems="center">
        <Grid xs={12} sm={6}>
          <GameCollage />
        </Grid>
        <Grid xs={12} sm={6}>
          <GameInstruction game={game} />
        </Grid>
        <Grid xs={12} sm={12} justify="space-evenly" alignItems="center">
          <GameRating />
        </Grid>
      </Grid.Container>

      {/* <Grid.Container gap={2} justify="space-around" alignItems="center">
        <GameProp game={game} /> <GameInstruction game={game} />
        <GameRating game={game} />
      </Grid.Container> */}
    </>
  )
}

export default GameDetails
