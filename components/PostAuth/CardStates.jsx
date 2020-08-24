import React from 'react'
import { string } from 'prop-types'
import { Box, Label, StyledATag, InlineBox } from '../Shared'
import { ADDRESS_PROPTYPE } from '../../customPropTypes'

export const Confirming = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='flex-start'
      width='100%'
    >
      <Label color='core.darkgray' textAlign='left' m={0}>
        Processing your Filecoin transaction.
      </Label>
    </Box>
  )
}

export const Confirmed = ({ address, enteredAddress, cid }) => {
  return (
    <>
      {address !== enteredAddress ? (
        <Box display='flex' mr={2}>
          <Label display='inline-block' my={0} mx={2}>
            Filecoin sent to
          </Label>
          <Label
            display='inline-block'
            maxWidth={8}
            color='core.primary'
            css={`
              white-space: wrap;
            `}
          >
            {address}
          </Label>
          <Label ml={1}>(</Label>
          <Label
            display='inline-block'
            maxWidth={8}
            color='core.primary'
            css={`
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
            `}
          >
            {enteredAddress}
          </Label>
          <Label>'s worker address)</Label>
        </Box>
      ) : (
        <Label display='inline-block' my={0} mx={2}>
          Filecoin sent to{' '}
          <InlineBox
            display='inline-block'
            fontSize={2}
            color='core.primary'
            css={`
              white-space: wrap;
            `}
          >
            {address}
          </InlineBox>
        </Label>
      )}{' '}
      <StyledATag
        display='inline'
        rel='noopener noreferrer'
        target='_blank'
        border='none'
        href={`https://filfox.info/en/message/${cid}`}
      >
        <Label color='core.primary'>VIEW</Label>
      </StyledATag>
    </>
  )
}

Confirmed.propTypes = {
  address: ADDRESS_PROPTYPE,
  enteredAddress: ADDRESS_PROPTYPE,
  cid: string.isRequired
}
