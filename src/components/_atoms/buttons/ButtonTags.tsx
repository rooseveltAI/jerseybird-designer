import { Button, ButtonGroup, HStack, Icon, Stack } from '@chakra-ui/react'
import React from 'react'
import { IconType } from 'react-icons'

interface ToggleButtonProps {
  buttons: { id: string; label: string }[]
  // icon: IconType
  activeButtonId?: string
  onButtonClick: (buttonId: string) => void
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ buttons, activeButtonId, onButtonClick }) => {
  return (
    <Stack spacing="13px">
      {buttons.map(({ id, label }) => (
        <Button
          key={id}
          onClick={() => onButtonClick(id)}
          isActive={id === activeButtonId}
          // colorScheme={activeButtonId === id ? 'gray' : 'whiteAlpha'}
          // bg={activeButtonId === id ? 'white' : 'rgba(0, 0, 0, 0.5)'}
          // color={activeButtonId === id ? '#000' : 'white'}
          // variant="outline"
          pl="22.33px"
          pr="22.45px"
          py="20px"
          // leftIcon={<Icon as={icon} />}
          alignItems="center"
          justifyContent="flex-start"
          variant="outline"
          _hover={{ bg: 'transparent' }}
          _active={{ bg: 'transparent' }}
          _focus={{ boxShadow: 'none', bgColor: '#FF3E3E', color: '#FFFFFF' }}
          borderRadius="full"
          // p={2}
        >
          {label}
          <style jsx global>{`
            .chakra-button {
              border: 2px dotted;
              border-color: transparent;
            }

            .chakra-button:focus .chakra-button {
              border-color: red;
              border-style: solid;
            }
          `}</style>
        </Button>
      ))}
    </Stack>
  )
}

export default ToggleButton
