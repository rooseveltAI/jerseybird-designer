import { Button, Heading, HStack, IconButton, Image, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useState } from 'react'
import { RiShoppingBagLine } from 'react-icons/ri'
import SidebarData from './SidebarData'

export const RightSidebar = (props: any) => {
  const [activeButtonId, setActiveButtonId] = useState('')

  return (
    <Stack>
      <SidebarData activeButtonId={activeButtonId} />
    </Stack>
  )
}
