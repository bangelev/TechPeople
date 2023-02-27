import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Navbar, Button, Text, Grid, Avatar } from '@nextui-org/react'
import Link from 'next/link'
// import Dropdown from './Dropdown'
import NavbarCollapse from './NavbarCollapse'
import { MdOutlineMapsHomeWork } from 'react-icons/md'
import { SiNintendogamecube, SiMicrodotblog } from 'react-icons/si'
import { GiBookshelf } from 'react-icons/gi'

export default function Header() {
  const router = useRouter()
  const strPaths = router.pathname.split('/')
  const currentPath = strPaths[strPaths.length - 1]

  const { data: session, status } = useSession()
  console.log(session)
  console.log(status)

  return (
    <Navbar
      isBordered
      shouldHideOnScroll
      variant="sticky"
      // color="warning"
      css={{ color: '#ec9546' }}
      data-cy="header"
    >
      <Navbar.Brand>
        <Navbar.Toggle
          aria-label="toggle navigation"
          showIn="sm"
          css={{ marginRight: '3px' }}
        />

        <Link href="/">
          <Grid>
            <Avatar src="/favicon3.png" size="md" css={{ cursor: 'pointer' }} />
          </Grid>
        </Link>
      </Navbar.Brand>
      <Navbar.Content
        hideIn="sm"
        enableCursorHighlight
        activeColor="primary"
        variant="highlight-rounded"
      >
        <Grid>
          <Button
            onClick={() => router.push('/parents')}
            auto
            size="xl"
            light
            icon={<MdOutlineMapsHomeWork fill="currentColor" />}
            color={currentPath && currentPath === 'parents' ? 'error' : ''}
          >
            Parents
          </Button>
        </Grid>
        <Grid>
          <Button
            onClick={() => router.push('/games')}
            auto
            size="xl"
            light
            icon={<SiNintendogamecube fill="currentColor" />}
            color={currentPath && currentPath === 'games' ? 'error' : ''}
          >
            All Games
          </Button>
        </Grid>
        <Grid>
          <Button
            onClick={() => router.push('/books')}
            auto
            size="xl"
            light
            icon={<GiBookshelf fill="currentColor" />}
            color={currentPath && currentPath === 'books' ? 'error' : ''}
          >
            Books
          </Button>
        </Grid>
        <Grid>
          <Button
            onClick={() => router.push('/blog')}
            auto
            size="xl"
            light
            icon={<SiMicrodotblog fill="currentColor" />}
            color={currentPath && currentPath === 'blog' ? 'error' : ''}
          >
            Blog
          </Button>
        </Grid>
        {/* <Dropdown /> */}
      </Navbar.Content>
      <Navbar.Content>
        {!session && (
          <Grid>
            <Button
              onClick={() => router.push('/login')}
              auto
              light
              color="inherit"
              bordered
            >
              Login
            </Button>
          </Grid>
        )}

        {session && (
          <Grid>
            <Button
              onClick={() => signOut({ callbackUrl: 'http://localhost:3000' })}
              auto
              color="error"
            >
              Sign Out
            </Button>
          </Grid>
        )}
      </Navbar.Content>
      <NavbarCollapse />
    </Navbar>
  )
}
