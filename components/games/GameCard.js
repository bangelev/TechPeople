import React from 'react'
import { useRouter } from 'next/router'
import {
  Card,
  Grid,
  Text,
  Button,
  Row,
  Spacer,
  Tooltip,
} from '@nextui-org/react'

const GameCard = ({ game }) => {
  const router = useRouter()
  const clickHandler = (e) => {
    e.preventDefault()
    router.push(`/games/${game._id}`)
  }
  return (
    <Card
      css={{ mw: '330px', mh: '500px', padding: '10px' }}
      isHoverable
      isPressable
      onClick={clickHandler}
    >
      <Card.Header>
        <Button color="success" auto size="xs" data-cy="categoryBtn">
          # {game.category[0]}
        </Button>
        <Spacer x={1} />
        <Button color="warning" auto size="xs" data-cy="categoryBtn">
          # {game.category[1]}
        </Button>
      </Card.Header>
      <Card.Divider />
      <Card.Header>
        <Text weight={'semibold'} size="$2xl" data-cy="gameName">
          {game.name}
        </Text>
      </Card.Header>
      <Card.Image
        src="/kids5.jpg"
        objectFit="cover"
        css={{ padding: '0 10px ' }}
        width="100%"
        height={200}
        alt="Card image background"
        data-cy="gameImg"
      />
      <Card.Divider />
      <Card.Body css={{ py: '$10', overflow: 'hidden', mh: '200px' }}>
        <Text data-cy="gameDescription">{game.description}</Text>
        <Card.Divider />
        <Grid.Container justify="space-between">
          <Tooltip
            content={game.props.length > 0 ? game.props : 'No need of props'}
            color="success"
            data-cy="propsTooltip"
          >
            <Button
              bordered
              auto
              color="success"
              css={{ my: '$10' }}
              size="sm"
              data-cy="propsBtn"
            >
              Props
            </Button>
          </Tooltip>
          <Tooltip
            content={`About ${game.proxPlayingTime} min`}
            color="error"
            data-cy="durationTooltip"
          >
            <Button
              bordered
              auto
              color="error"
              css={{ my: '$10' }}
              size="sm"
              data-cy="durationBtn"
            >
              Duration
            </Button>
          </Tooltip>
          <Tooltip
            content={`${game.minAge}`}
            color="secondary"
            data-cy="minAgeTooltip"
          >
            <Button
              bordered
              auto
              color="secondary"
              css={{ my: '$10' }}
              size="sm"
              data-cy="MinAgeBtn"
            >
              Min Age
            </Button>
          </Tooltip>
        </Grid.Container>
      </Card.Body>

      <Card.Footer
        css={{
          backgroundColor: '#f6f69b',
          paddingTop: '0px',
          paddingBottom: '0px',
        }}
      >
        <Row justify="flex-end">
          {/* <Text>{`Created at: ${game.createdAt.toString().slice(0, 10)}`}</Text> */}
          <Text data-cy="textFooter">{`Created at: ${game.createdAt.toLocaleString(
            'mk-MK',
            {
              timeZone: 'UTC',
            }
          )}`}</Text>
        </Row>
      </Card.Footer>
    </Card>
  )
}

export default GameCard
