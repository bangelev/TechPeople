import React, { useEffect, useState, Fragment } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import connectMongoDB from '../../config/connectMongoDB'
import Game from '../../models/game'
import Head from 'next/head'
import GameDetails from '../../components/games/GameDetails/GameDetails'
import Loading from '../../components/layout/Loading'

function gameDetails({ game }) {
  // const [loading, setLoading] = useState(true)
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!session) {
      router.push('/login')
    }
  }, [])
  return (
    <>
      {/* {status === 'loading' && <Loading />} */}
      <Head>
        <title>{game.name}</title>
      </Head>

      <GameDetails game={game} />
    </>
  )
}

export default gameDetails

export async function getServerSideProps(context) {
  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: '/login',
  //       permanent: false,
  //     },
  //   }
  // } else {

  // }
  await connectMongoDB()
  console.log(context.query)
  const { gameId } = context.query
  const data = await Game.findById(gameId)
  const game = JSON.stringify(data)

  return {
    props: {
      game: JSON.parse(game),
    },
  }
}
