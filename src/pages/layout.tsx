import { Outlet } from 'react-router-dom'

import { ContentContainer, MainContainer, OverflowContainer } from './layout.styled'
import { Navbar } from '../components/nav-bar'

export const Layout = () => {
  return (
    <MainContainer>
      <Navbar />
      <OverflowContainer  >
        <ContentContainer elevation={3}>
          <Outlet />
        </ContentContainer>
      </OverflowContainer>
    </MainContainer>
  )
}
