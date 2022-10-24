import React from 'react'
import Link from 'next/link'

function parents() {
  return (
    <div
      style={{
        color: 'blue',
        backgroundColor: '#d1d11e',
        marginTop: '50px',
        height: '600px',
        textAlign: 'center',
      }}
    >
      This is parents page
      <Link href="parents/games">
        <h3>
          <a>Go to Games</a>
        </h3>
      </Link>
    </div>
  )
}

export default parents
