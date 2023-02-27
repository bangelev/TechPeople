import React from 'react'
import { Navbar } from '@nextui-org/react'
import Link from 'next/link'

export default function NavbarCollapse() {
  const collapseItems = ['Home', "Parent's Home", 'Games', 'Books', 'Blog']
  const paths = [
    '/',
    '/parents',
    '/parents/games',
    '/parents/books',
    '/parents/blog',
  ]
  return (
    <>
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              // color="inherit"
              css={{
                minWidth: '100%',
              }}
              href={`${paths[index]}`}
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </>
  )
}
