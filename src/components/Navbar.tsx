import { Button, HStack, IconButton, Image, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { RiShoppingBagLine } from 'react-icons/ri'

export const Navbar = (props: any) => {
  return (
    <Stack
      direction="row"
      align="center"
      justify="space-between"
      px={{ base: '1rem', lg: '4rem' }}
      h={{ base: '58px', md: '70px' }}
      background="#FFFFFF"
      boxShadow="0px 0px 1px rgba(0, 0, 0, 0.2)"
      pos="fixed"
      w="100%"
      zIndex="4"
    >
      <HStack>
        <Link href="/">
          <Image src="/logo_100x.png" alt="logo" w={{ base: '140px', lg: '60px' }} h={{ base: '140px', lg: '26px' }} />
        </Link>
      </HStack>

      <HStack
        align="center"
        justify="center"
        fontWeight="500"
        fontSize="14px"
        display={{ base: 'none', lg: 'flex' }}
        whiteSpace="nowrap"
        color="#6E6D7A"
      >
        <Text>JERSEYBIRD CUSTOM JERSEY DESIGNER</Text>
      </HStack>

      <HStack display={{ base: 'none', lg: 'flex' }} justify="flex-end">
        <IconButton aria-label="Cart" icon={<RiShoppingBagLine size="24px" />} />
      </HStack>
    </Stack>
  )
}
