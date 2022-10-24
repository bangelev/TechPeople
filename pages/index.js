import Link from 'next/link'

export default function Home() {
  return (
    <div
      style={{
        color: 'green',
        backgroundColor: 'yellow',

        height: '600px',
        textAlign: 'center',
      }}
    >
      <h1>Landing Page for Tech People</h1>
      <Link href="/parents">
        <a>Go to parents</a>
      </Link>
    </div>
  )
}
