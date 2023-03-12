import React from 'react'
import { Button, ButtonProps } from '@chakra-ui/react'

interface CustomButtonProps extends ButtonProps {
  isSelected: boolean
}

export const TabButton: React.FC<CustomButtonProps> = ({ variant, isSelected, children, ...props }) => {
  return (
    <Button
      bgColor={isSelected ? 'white' : 'rgba(0, 0, 0, 0.5)'}
      color={isSelected ? '#000' : 'white'}
      rounded="full"
      pl="22.33px"
      pr="22.45px"
      py="16px"
      _hover={{ bgColor: isSelected ? 'white' : 'rgba(0, 0, 0, 0.7)' }}
      variant={variant}
      {...props}
    >
      {children}
    </Button>
  )
}
