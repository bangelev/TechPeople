import React from 'react'
import { Text } from '@nextui-org/react'

const Footer = () => {
  return (
    <>
      <footer
        style={{
          marginTop: 'auto',
          marginBottom: '20px',
        }}
      >
        <Text css={{ textAlign: 'center' }}>
          Copyright &copy; 2022 <span>TechPeople</span> of The World
        </Text>
      </footer>
    </>
  )
}

export default Footer
