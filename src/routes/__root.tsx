import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { css } from '../../styled-system/css'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <div className={styles.root}>
        <Link to="/" className={styles.link}>Home</Link>{' '}
        <Link to="/about" className={styles.link}>About</Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </React.Fragment>
  )
}

const styles = {
  root: css({
    display: 'flex',
    gap: '0.5rem',
    padding: '0.5rem',
  }),
  link: css({
    '&.active': {
      fontWeight: 'bold',
    }
  })
}
