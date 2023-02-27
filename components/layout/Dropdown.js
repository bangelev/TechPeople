import { Navbar, Dropdown } from '@nextui-org/react'
import { Link } from '@nextui-org/react'
import { FaHome as Indoor } from 'react-icons/fa'
import { GiBabyfootPlayers } from 'react-icons/gi'

import { icons } from './Icons.js'

export default function App() {
  return (
    <Dropdown isBordered>
      <Navbar.Item>
        <Dropdown.Button
          auto
          light
          css={{
            px: 0,
            dflex: 'center',
            svg: { pe: 'none' },
          }}
          iconRight={icons.chevron}
          ripple={false}
        >
          Games
        </Dropdown.Button>
      </Navbar.Item>
      <Dropdown.Menu
        aria-label="ACME features"
        css={{
          $$dropdownMenuWidth: '340px',
          $$dropdownItemHeight: '70px',
          '& .nextui-dropdown-item': {
            py: '$4',
            // dropdown item left icon
            svg: {
              color: '$secondary',
              mr: '$4',
            },
            // dropdown item title
            '& .nextui-dropdown-item-content': {
              w: '100%',
              fontWeight: '$semibold',
            },
          },
        }}
      >
        <Dropdown.Item key="indoor">
          <Link href="#">
            <Indoor />
            Indoor
          </Link>
        </Dropdown.Item>
        <Dropdown.Item key="outdoor">
          <Link href="#">
            <GiBabyfootPlayers /> Outdoor
          </Link>
        </Dropdown.Item>
        {/* <Dropdown.Item key="indoor">
          <Link href="#">Indoor</Link>
        </Dropdown.Item>
        <Dropdown.Item key="indoor">
          <Link href="#">Indoor</Link>
        </Dropdown.Item>
        <Dropdown.Item key="indoor">
          <Link href="#">Indoor</Link>
        </Dropdown.Item>
        <Dropdown.Item key="indoor">
          <Link href="#">Indoor</Link>
        </Dropdown.Item>
        <Dropdown.Item key="indoor">
          <Link href="#">Indoor</Link>
        </Dropdown.Item>
        <Dropdown.Item key="indoor">
          <Link href="#">Indoor</Link>
        </Dropdown.Item>
        <Dropdown.Item key="indoor">
          <Link href="#">Indoor</Link>
        </Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
  )
}
