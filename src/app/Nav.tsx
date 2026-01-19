import { requestInfo as r } from 'rwsdk/worker'

export function Nav() {
  const url = new URL(r.request.url)
  const path = url.pathname
  return (
    <nav className="flex gap-4 border-gray-200 border-b mb-2">
      {path === '/' ? null : <link rel="prefetch" href="/" />}
      <a
        href="/"
        className={
          'hover:underline' +
          (path === '/' ? ' font-bold pointer-events-none cursor-not-allowed' : '')
        }
      >
        Home
      </a>
      {path === '/about' ? null : <link rel="prefetch" href="/about" />}
      <a
        href="/about"
        className={
          'hover:underline' +
          (path === '/about' ? ' font-bold pointer-events-none cursor-not-allowed' : '')
        }
      >
        About
      </a>
    </nav>
  )
}
