import React from 'react'

import { Card, Grid, Text } from '@nextui-org/react'

const GameRating = () => {
  return (
    <Grid xs={12}>
      <Card>
        <Card.Header>
          <Text b h2 css={{ textAlign: 'center' }}>
            Reviews & Comments
          </Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body css={{ py: '$10' }}>
          <Text
            css={{
              textGradient: '45deg, $blue600 -20%, $pink600 50%',
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            error earum ullam minima consequatur nisi beatae assumenda itaque
            ratione deleniti. Officiis quod cupiditate ipsa sed dolor alias ex
            magni possimus!
          </Text>
        </Card.Body>
      </Card>
    </Grid>
  )
}

export default GameRating
