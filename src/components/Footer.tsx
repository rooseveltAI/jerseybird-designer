import { HStack, Image, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'

export const Footer = () => {
  return (
    <Stack w="100%" spacing="0">
      <Stack
        direction={['column', 'row']}
        justify="space-between"
        align="center"
        px={{ base: '1rem', sm: '2rem', lg: '4rem' }}
        py={{ base: '1rem', sm: '2rem', lg: '12px' }}
        spacing={{ base: '1rem', md: '48px' }}
        w="100%"
        bgColor="#FAFAFB"
        color="#000"
        whiteSpace="nowrap"
        zIndex="2"
      >
        <HStack>
          <Link href="/">
            <Image src="/assets/logo.svg" alt="logo" boxSize={{ base: '140px', lg: '117px' }} />
          </Link>
        </HStack>
        <Stack direction="row" align="center" spacing={{ base: '1rem', md: '1.4rem' }} fontSize="14px">
          <Text opacity="72%" fontSize="14px">
            © {new Date().getFullYear()} Buildlle. All Rights Reserved.
          </Text>
          <Link href="/terms">Terms of use</Link>
        </Stack>
      </Stack>
    </Stack>
  )
}
