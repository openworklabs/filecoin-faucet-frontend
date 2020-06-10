import { forwardRef } from 'react'
import { func, string, bool, number } from 'prop-types'
import styled from 'styled-components'
import BaseInput from './BaseInput'
import InputWrapper from './InputWrapper'
import Box from '../Box'
import { Label } from '../Typography'

export const DenomTag = styled(Box).attrs(props => ({
  display: 'flex',
  height: '100%',
  px: 3,
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 3,
  minWidth: 7,
  color: 'core.primary',
  backgroundColor: 'input.background.base',
  ...props
}))`
  text-align: center;
  position: relative;
  background: ${props => {
    if (props.valid) return props.theme.colors.input.background.valid
    if (props.error) return props.theme.colors.input.background.invalid
    if (props.disabled) return props.theme.colors.input.background.disabled
    return props.theme.colors.input.background.base
  }};
`

export const RawNumberInput = styled(BaseInput).attrs(props => ({
  ...props
}))`
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  background: ${props => {
    if (props.valid) return props.theme.colors.input.background.valid
    if (props.error) return props.theme.colors.input.background.invalid
    if (props.disabled) return props.theme.colors.input.background.disabled
    return props.theme.colors.input.background.base
  }};
  -moz-appearance: textfield;
`

export const NumberInput = forwardRef(
  (
    {
      denom,
      onChange,
      value,
      placeholder,
      label,
      error,
      setError,
      valid,
      fontSize,
      ...props
    },
    ref
  ) => {
    return (
      <InputWrapper ref={ref} {...props}>
        <Box position='relative' display='flex' alignItems='center'>
          {label && (
            <Box
              display='inline-block'
              px={2}
              minWidth={[9, 9, 10]}
              textAlign='left'
            >
              <Label>{label}</Label>
            </Box>
          )}
          <Box
            position='relative'
            display='flex'
            justifyContent='flex-end'
            width='100%'
          >
            <RawNumberInput
              type='number'
              onChange={onChange}
              value={value}
              valid={valid}
              error={error}
              setError={setError}
              placeholder={placeholder}
              fontSize={fontSize}
              {...props}
            />
            {denom && (
              <DenomTag
                height='64px'
                css={`
                  top: 0px;
                  left: 0px;
                `}
              >
                {denom}
              </DenomTag>
            )}
          </Box>
        </Box>
      </InputWrapper>
    )
  }
)

NumberInput.propTypes = {
  onChange: func,
  label: string,
  value: string,
  placeholder: string,
  disabled: bool,
  error: string,
  valid: bool,
  fontSize: number,
  denom: string
}

NumberInput.defaultProps = {
  value: '',
  disabled: false,
  onChange: () => {},
  label: '',
  fontSize: 2
}