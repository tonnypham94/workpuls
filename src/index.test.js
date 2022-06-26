import { render, screen } from '@testing-library/react'
import ProjectsTracking from './pages/ProjectsTracking'

test('renders learn react link', () => {
  render(<ProjectsTracking />)
  const linkElement = screen.getByText(/WORKPULS/i)
  expect(linkElement).toBeInTheDocument()
})
