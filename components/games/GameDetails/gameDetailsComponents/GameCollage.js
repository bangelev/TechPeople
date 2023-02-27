import React from 'react'
import { Grid, Card, Text, Image, Container, Row } from '@nextui-org/react'

const GameCollage = () => {
  return (
    <>
      <div className="wrapper">
        <figure>
          <div className="post-image">
            <img src="https://unsplash.it/900/400/?random" />
          </div>
        </figure>

        <figure>
          <div className="post-image">
            <img src="https://unsplash.it/400/300/?random" />
          </div>
          <div className="post-image">
            <img src="https://unsplash.it/800/600/?random" />
          </div>
        </figure>

        <figure>
          <div className="post-image">
            <img src="https://unsplash.it/375/250/?random" />
          </div>
          <div className="post-image">
            <img src="https://unsplash.it/396/264/?random" />
          </div>
          <div className="post-image">
            <img src="https://unsplash.it/399/266/?random" />
          </div>
        </figure>
      </div>
    </>
  )
}

export default GameCollage
