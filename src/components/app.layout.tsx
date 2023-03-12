import { chakra, Grid, Heading } from '@chakra-ui/react'
import { css, Global } from '@emotion/react'
import React, { useState } from 'react'
import { Footer } from './Footer'
import { LeftSidebar } from './LeftSidebar'
import { Navbar } from './Navbar'
import { RightSidebar } from './RightSidebar'
import SidebarData from './SidebarData'

type AppLayoutProps = {
  children: React.ReactElement
}

const Layout = ({ children }: AppLayoutProps) => {
  const [activeButtonId, setActiveButtonId] = useState('')

  const handleButtonClick = (buttonId: string) => {
    setActiveButtonId(buttonId)
  }

  return (
    <>
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
          ::-webkit-scrollbar {
            width: 0px;
            border-radius: 20px;
            background-color: rgba(255, 255, 255, 4%);
          }

          ::-webkit-scrollbar-thumb {
            backgroundcolor: rgba(255, 255, 255, 12%);
          }
        `}
      />
      <Grid
        // templateColumns="1fr"
        // templateRows="52px 1fr"
        templateColumns="240px 1fr 280px"
        templateRows="70px 1fr 70px"
        templateAreas={{
          base: `"topbar topbar" "main main" "bottombar bottombar"`,
          md: `"topbar topbar topbar"
          "lsidebar main rsidebar"
          "lsidebar main rsidebar"`
        }}
        // templateAreas={`"nav nav" "main main" "footer footer"`}
        minH="100vh"
      >
        <chakra.nav gridArea="topbar">
          <Navbar />
        </chakra.nav>

        <chakra.aside
          gridArea="lsidebar"
          display={{ base: 'none', md: 'block' }}
          bg="rgba(255, 255, 255, 0.01)"
          borderRight="1px solid rgba(17, 17, 17, 0.04)"
        >
          <LeftSidebar onButtonClick={handleButtonClick} />
        </chakra.aside>

        <chakra.main gridArea="main">{children}</chakra.main>

        <chakra.aside
          gridArea="rsidebar"
          display={{ base: 'none', md: 'block' }}
          bg="rgba(255, 255, 255, 0.01)"
          borderLeft="1px solid rgba(17, 17, 17, 0.04)"
        >
          <SidebarData activeButtonId={activeButtonId} />
        </chakra.aside>

        {/* <chakra.footer gridArea="footer">
          <Footer />
        </chakra.footer> */}
      </Grid>
    </>
  )
}

export default Layout
