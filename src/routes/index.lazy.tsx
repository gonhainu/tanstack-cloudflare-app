import { createLazyFileRoute } from '@tanstack/react-router'
import { css } from '../../styled-system/css'

export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className={css({ padding: '0.5rem' })}>
      <h3>Welcome Home!</h3>
    </div>
  )
}
