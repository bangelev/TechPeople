import React from 'react'

const IndexCard = ({ category }) => {
  return (
    <div className="box" data-cy="indexCard">
      <img
        src={`/landingPage/${category.toLowerCase()}.jpg`}
        className="box--images"
        data-cy="cardImg"
      />

      <span data-cy="cardTittle">{category}</span>
    </div>
  )
}

export default IndexCard
