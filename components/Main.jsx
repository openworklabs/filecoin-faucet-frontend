import React from 'react'
import PreAuth from './PreAuth'
import PostAuth from './PostAuth'
import {
  Box,
  Title,
  Header,
  Label,
  Highlight,
  HeaderGlyph
} from '@glif/react-components'
import CheckBalanceAmount from './CheckBalanceAmount'
import { useJwt } from '../lib/JwtHandler'

export default () => {
  const { jwt } = useJwt()
  return (
    <Box
      display='flex'
      flexWrap='wrap'
      alignItems='center'
      justifyContent='center'
      flexGrow='1'
      p={[2, 3, 5]}
    >
      <Box
        display='flex'
        maxWidth={13}
        width={['100%', '100%', '40%']}
        flexDirection='column'
        alignItems='flex-start'
        alignContent='center'
        mb={4}
      >
        <HeaderGlyph
          alt='Source: https://unsplash.com/photos/g2Zf3hJyYAc'
          text='Faucet'
          imageUrl='/imgfaucet.jpg'
        />

        <Box
          display='flex'
          flexDirection='column'
          mt={[2, 4, 4]}
          alignSelf='center'
          textAlign='left'
        >
          <Header lineHeight={1}>
            Quickly, easily receive testnet Filecoin
          </Header>
          <Title mt={3} lineHeight='140%'>
            Receive small amounts of testnet FIL to help your testing and
            experimentation.
          </Title>
          <Box mt={[2, 3, 4, 6]} maxWidth={12}>
            <Label
              color='core.darkgray'
              textAlign='left'
              mt={3}
              lineHeight='copy'
            >
              <Highlight fontSize={2}>Rules</Highlight>
              <br />
              Anyone with a GitHub account over one year old can receive 1 FIL
              from this faucet, one time only.
            </Label>
          </Box>
        </Box>
      </Box>
      <Box
        display='flex'
        width={['100%', '80%', '55%']}
        minWidth={11}
        flexWrap='wrap'
        justifyContent='space-evenly'
        margin='auto'
      >
        <Box
          display='flex'
          flexDirection='column'
          p={3}
          mt={[5, 0, 0]}
          minHeight={10}
          width='100%'
          maxWidth={13}
          alignItems='center'
          justifyContent='center'
          borderRadius={2}
          bg='background.screen'
        >
          {jwt ? <PostAuth /> : <PreAuth />}
        </Box>
        <CheckBalanceAmount />
      </Box>
    </Box>
  )
}
