import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Icon } from '@chakra-ui/react'
import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { RiArrowDownSFill, RiArrowDropDownFill, RiArrowDropUpFill, RiArrowUpSFill } from 'react-icons/ri'

const colors: string[] = [
  '#FFC0CB',
  '#FFA07A',
  '#FFD700',
  '#FFFF00',
  '#32CD32',
  '#00FFFF',
  '#87CEEB',
  '#6A5ACD',
  '#FF69B4',
  '#9400D3'
]

const generateRandomColor = (): string => colors[Math.floor(Math.random() * colors.length)]

interface AccordionPickerItemProps {
  title: string
}

const AccordionPickerItem: React.FC<AccordionPickerItemProps> = ({ title }) => {
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
        <Box display="grid" gridTemplateColumns="repeat(6, 30px)" gridGap="6px">
          {Array.from({ length: 30 }, (_, i) => (
            <Box cursor="pointer" key={i} w="30px" h="30px" bg={generateRandomColor()}></Box>
          ))}
        </Box>
      </AccordionPanel>
    </AccordionItem>
  )
}

const AccordionPicker: React.FC = () => {
  return (
    <Accordion allowMultiple>
      <AccordionPickerItem title="Color 1" />
      <AccordionPickerItem title="Color 2" />
      <AccordionPickerItem title="Color 3" />
      <AccordionPickerItem title="Color 4" />
    </Accordion>
  )
}

export default AccordionPicker
