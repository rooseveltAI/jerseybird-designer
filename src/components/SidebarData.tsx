import { useReducer } from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
import ToggleButton from 'components/_atoms/buttons/ButtonTags'
import AccordionPicker from './Accordion'
import UploadLogo from './UploadLogo'
import EditText from './EditText'

interface SidebarDataProps {
  activeButtonId: string
}

const Title = ({ title }: any) => {
  return (
    <Heading
      color="#3D3D4E"
      pb={{ base: '1rem', md: '1rem' }}
      px={{ base: '', md: '4' }}
      fontSize={{ base: '1rem', md: '16px' }}
      textTransform="uppercase"
      letterSpacing="0.15px"
      opacity="0.9"
      fontWeight="600"
    >
      {title}
    </Heading>
  )
}
const Wrapper = ({ children }: any) => {
  return (
    <Box py={{ base: '1rem', md: '3rem' }} px={{ base: '', md: '0' }}>
      {children}
    </Box>
  )
}

const SidebarData: React.FC<SidebarDataProps> = ({ activeButtonId }) => {
  if (activeButtonId === 'edit-color') {
    return (
      <Wrapper>
        <Title title="Edit Color" />
        <AccordionPicker />
      </Wrapper>
    )
  }

  if (activeButtonId === 'upload-logo') {
    return (
      <Wrapper>
        <Title title="Upload Logo" />
        <UploadLogo />
      </Wrapper>
    )
  }

  if (activeButtonId === 'edit-text') {
    return (
      <Wrapper>
        <Title title="Edit Text" />
        <EditText />
      </Wrapper>
    )
  }

  if (activeButtonId === 'style') {
    return (
      <Wrapper>
        <Title title="Style" />
        {/* <AccordionPicker /> */}
      </Wrapper>
    )
  }

  return null
}

export default SidebarData
