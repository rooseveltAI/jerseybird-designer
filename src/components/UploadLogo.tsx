import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Icon, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { RiArrowDownSFill, RiArrowDropDownFill, RiArrowDropUpFill, RiArrowUpSFill, RiUploadCloudFill } from 'react-icons/ri'

interface UploadLogoItemProps {
  title: string
}

const AccordionPickerItem: React.FC<UploadLogoItemProps> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <AccordionItem p="0">
      <AccordionButton
        px="4"
        rounded="md"
        color="rgba(54, 61, 97, 0.8)"
        borderBottom="1px solid rgba(17, 17, 17, 0.04)"
        fontWeight="500"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <Icon as={isOpen ? RiArrowUpSFill : RiArrowDownSFill} ml="auto" />
      </AccordionButton>
      <AccordionPanel display={isOpen ? 'block' : 'none'}>
        <Stack align="center" justify="center" py={{ base: '1rem', md: '2rem' }}>
          <Stack cursor="pointer" textAlign="center" align="center" justify="center">
            <RiUploadCloudFill size={24} />
            <Text opacity="0.8">Click to upload or drag logo here (.png or .jpg)</Text>
          </Stack>
        </Stack>
      </AccordionPanel>
    </AccordionItem>
  )
}

const UploadLogo: React.FC = () => {
  return (
    <Accordion allowMultiple>
      <AccordionPickerItem title="Center" />
      <AccordionPickerItem title="Left Shoulder" />
      <AccordionPickerItem title="Right Shoulder" />
    </Accordion>
  )
}

export default UploadLogo
