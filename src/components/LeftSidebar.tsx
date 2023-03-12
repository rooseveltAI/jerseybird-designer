import { Button, Heading, HStack, IconButton, Image, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { RiShoppingBagLine } from 'react-icons/ri'
import ToggleButton from './_atoms/buttons/ButtonTags'

interface LeftSidebarProps {
  onButtonClick: (buttonId: string) => void
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({ onButtonClick }) => {
  const buttons = [
    { id: 'edit-color', label: 'Edit Color' },
    { id: 'upload-logo', label: 'Upload Logo' },
    { id: 'edit-text', label: 'Edit Text' },
    { id: 'style', label: 'Style' }
  ]

  return (
    <Stack>
      <Stack align="center" flexDirection="column" py={{ base: '1rem', md: '3rem' }}>
        <ToggleButton buttons={buttons} onButtonClick={onButtonClick} />
      </Stack>
    </Stack>
  )
}
