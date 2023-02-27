import React from 'react'
import { Card, Divider, Grid, Text } from '@nextui-org/react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const GameInstruction = ({ game }) => {
  return (
    <Grid variant="flat">
      <Card css={{ height: '90vh' }}>
        <Text
          h4
          css={{
            textAlign: 'center',
            textGradient: '45deg, $blue600 -20%, $pink600 50%',
            fontSize: '$2xl',
            // fontWeight: '400',
          }}
        >
          THIS IS WHAT YOU SHOULD DO
        </Text>
        {/* </Card.Header> */}
        <Card.Divider />
        <Card.Body css={{ py: '$10' }}>
          <Text>
            {game.instructions}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            impedit, incidunt voluptatem esse non officia odio numquam eaque
            voluptatibus nemo consequatur illum minima aspernatur nam deserunt
            fugiat reiciendis tenetur minus? Illo magnam ratione corporis id
            porro neque laboriosam accusantium earum veniam ad praesentium
            perferendis eveniet deserunt, perspiciatis, eligendi possimus
            repellat expedita omnis at tenetur qui accusamus! Deleniti officia
            nobis illum? Beatae, excepturi? Praesentium quo voluptatibus nobis
            eos ratione aliquid consequatur, ipsam repellendus numquam
            similique. Atque odio placeat rerum laboriosam minus provident
            aspernatur, molestiae unde esse quod, ipsa quas quibusdam dolore?
            <Text h5 blockquote color="warning">
              All you need is -
              {game.props.length > 0
                ? game.props.join(' and ').toUpperCase()
                : 'Hey, you need nothing!'}
              , minimum children age is -
              {game ? game.minAge : 'Hey, you need nothing!'} and proximate
              duration is {game.proxPlayingTime} minutes.
            </Text>
          </Text>
          <Divider />
          <Text color="error" css={{ textAlign: 'center', fontSize: '$3xl' }}>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </Text>
        </Card.Body>
      </Card>
    </Grid>
  )
}

export default GameInstruction
