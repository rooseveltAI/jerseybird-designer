import React from 'react'

import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { IconSearch } from 'components/_atoms/icons'

const SearchInput = () => {
  return (
    <InputGroup maxW="480px">
      <InputLeftElement pointerEvents="none" ml={{ base: '1rem', md: '1rem' }} py={{ base: '1rem', md: '1.4rem' }}>
        <IconSearch />
      </InputLeftElement>

      <Input
        type="text"
        placeholder="Search"
        bgColor="white"
        color="#1A202C"
        outline="none"
        py={{ base: '1rem', md: '1.4rem' }}
        pl={{ base: '1rem', md: '3.5rem' }}
        // variant=""
        _placeholder={{ color: '#9E9EA7' }}
        _hover={{ boxShadow: 'none', bgColor: 'white' }}
        _focus={{ boxShadow: '0', bgColor: 'white', outline: 'none' }}
      />
    </InputGroup>
  )
}

export default SearchInput
