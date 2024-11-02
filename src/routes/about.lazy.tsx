import { createLazyFileRoute } from '@tanstack/react-router'
import { css } from '../../styled-system/css'

export const Route = createLazyFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className={css({ padding: '0.5rem' })}>Hello from About!</div>
}
