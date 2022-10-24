import Game from '../../../models/game'
import connectMongoDB from '../../../config/connectMongoDB'

import Link from 'next/link'

function games({ games }) {
  return (
    <div
      style={{
        textAlign: 'center',
        backgroundColor: '#00ff87',
        height: '700px',
      }}
    >
      <h1>This is parent landing page in greenish</h1>
      <h3>Here should be listed the GAMES </h3>
      {games.map((game, index) => {
        return (
          <Link key={game._id} href={`games/${game._id}`}>
            <h3>
              {index}. {game.name}
            </h3>
          </Link>
        )
      })}
    </div>
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
