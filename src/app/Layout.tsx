import { Nav } from './Nav'
import { ViewTransition } from 'react'

export function Layout({ children }: { children: React.ReactNode }) {
  const title = 'rwsdk-minimal-starter'
  return (
    <div className="mx-auto max-w-3xl p-2">
      <title>{title}</title>
      <Nav />
      <main>
        <ViewTransition>
          <h1 className="text-2xl font-bold">{title}</h1>
          {children}
        </ViewTransition>
      </main>
    </div>
  )
}
