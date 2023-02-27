import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Container, Text, Col, Row, Grid } from '@nextui-org/react'
import VideoCard from '../../components/parents/daVinchiCard/VideoCard'
import videoCardData from '../../utils/videoCardsData.json'

function parents() {
  return (
    <>
      <Head>
        <title>Parents</title>
      </Head>

      <Grid.Container
        gap={2}
        justify="center"
        css={{
          paddingTop: '60px',
          textAlign: 'center',
        }}
      >
        <Grid xs={6}>
          <div>
            <Text h2 css={{ fontWeight: '300' }}>
              So, Parents
            </Text>
            <Text h1 css={{ fontWeight: '300' }}>
              how can we connect our tech environment with us? Let's go step by
              step. The most important thing for every human being is to develop
              himself and help children to do so. Leonardo da Vinci will tell us
              how, and then we'll find the connections and dots together. The
              first thing is first, starting with Leo's genius life and his 7
              principles...
            </Text>
          </div>
        </Grid>
        <Grid>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/JgaPgTN1F7A?clip=Ugkx2qXjx9-F5mZApXzEnxoWoxElkbyRyrpn&amp;clipt=EAAYsM8D"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Grid>
      </Grid.Container>
      <Grid.Container
        gap={2}
        justify="space-around"
        alignItems="flex-start"
        alignContent="flex-start"
      >
        {videoCardData.map((cardData, index) => {
          return (
            <Grid key={cardData.principle}>
              <VideoCard cardData={cardData} />
            </Grid>
          )
        })}
      </Grid.Container>
      <div>
        <Text
          h3
          color="error"
          css={{ marginTop: '10px', fontWeight: '300', alignText: 'center' }}
        >
          <Link href="/games">Now we can PLAY the Game</Link>
        </Text>
      </div>
    </>
  )
}

export default parents
