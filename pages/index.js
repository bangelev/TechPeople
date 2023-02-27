import Link from 'next/link'
import { Button, Text } from '@nextui-org/react'
import parents from './parents/index'

import Image from 'next/image'
import IndexCard from '../components/index/indexCard'

export default function Home() {
  const categories = ['Technology', 'Nature', 'Family', 'Health', 'Fun']
  return (
    <>
      <div className="container--index">
        {categories.map((category) => (
          <IndexCard category={category} key={category} />
        ))}
      </div>
      <div style={{ alignText: 'center' }}>
        <Text
          h1
          css={{ color: '#ec9546', fontWeight: '300' }}
          data-cy="parentsLink"
        >
          <Link href="parents">
            OK, let's go now & connect all this in&nbsp; ONE !!!
          </Link>
        </Text>
      </div>
    </>
  )
}
