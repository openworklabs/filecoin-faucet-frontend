import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'
import { Box, Label, StyledATag, AddressLink, InlineBox } from '../Shared'
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
        <Box display='flex' alignItems='baseline' mr={2}>
          <Label display='inline-block' my={0} mx={2}>
            Filecoin sent to
          </Label>
          <AddressLink
            truncate={true}
            address={address}
            href={`https://filfox.info/en/address/${address}`}
          />
          <Label ml={1}>( </Label>
          <AddressLink
            truncate={true}
            address={address}
            href={`https://filfox.info/en/address/${address}`}
          />
          <Label>'s worker address)</Label>
        </Box>
      ) : (
        <Label display='inline-block' my={0} mx={2}>
          Filecoin sent to{' '}
          <AddressLink
            truncate={true}
            address={address}
            href={`https://filfox.info/en/address/${address}`}
          />
        </Label>
      )}{' '}
      <StyledATag
        display='inline'
        rel='noopener noreferrer'
        target='_blank'
        border='none'
        href={`https://filscan.io/#/message/detail?cid=${cid}`}
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
