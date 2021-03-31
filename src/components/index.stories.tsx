import React from 'react'
import MultiFieldsInput from './'

export default { title: 'MultiFieldsInput' }

const inputs = [
  {
    maxLength: 4,
    placeholder: '0000',
  },
  {
    maxLength: 4,
    placeholder: '0000',
  },
  {
    maxLength: 4,
    placeholder: '0000',
  },
]

export const NumberFields = () => (
  <MultiFieldsInput
    label="Sort Code"
    name="sortCode"
    inputs={inputs}
    value="202020"
    onBlur={data => console.log(data)}
  />
)

const textInputs = [
  {
    maxLength: 2,
    placeholder: 'aa',
  },
  {
    maxLength: 2,
    placeholder: 'ss',
  },
  {
    maxLength: 2,
    placeholder: 'dd',
  },
  {
    maxLength: 2,
    placeholder: 'ff',
  },
]

export const TextFields = () => (
  <MultiFieldsInput
    label="Voucher Code"
    name="voucherCode"
    inputs={textInputs}
    value="aassddff"
    autoFocus={false}
    onBlur={data => console.log(data)}
    onChange={data => console.log(data)}
  />
)

export const WithoutLabel = () => (
  <MultiFieldsInput
    name="sortCode"
    inputs={inputs}
    onBlur={data => console.log(data)}
  />
)

export const WithInvalidInput = () => (
  <MultiFieldsInput
    name="sortCode"
    inputs={inputs}
    value="202020"
    onBlur={data => console.log(data)}
    onChange={data => console.log(data)}
    error="Input is invalid"
  />
)

export const WithStyle = () => (
  <div
    style={{
      width: '300px',
    }}
  >
    <MultiFieldsInput
      name="sortCode"
      inputs={inputs}
      label="Sort Code"
      value="202020"
      onBlur={data => console.log(data)}
      onChange={data => console.log(data)}
      error="Input is invalid. Please, enter a valid number."
      styles={{
        container: {
          width: 'auto',
          color: '#2D3748',
        },
        label: {
          width: '100%',
          color: '#4A5568',
          fontWeight: 'bold',
          marginBottom: '0.3em',
          fontSize: '15px',
          display: 'block',
        },
        input: {
          borderRadius: '5px',
          padding: '0.75em 1em',
          border: '0px solid #A0AEC0',
          color: '#2D3748',
					outline: 'none',
					width: '50px',
          maxWidth: '7em',
        },
        error: {
          boxSizing: 'border-box',
          marginTop: '0.7em',
          padding: '0.75em 1em',
          backgroundColor: '#FED7D7',
          display: 'block',
          borderRadius: '5px',
          fontWeight: 'bold',
          color: '#C53030',
          fontSize: '13px',
          width: '100%',
        },
        inputContainer: {
          display: 'flex',
					border: '3px solid #A0AEC0',
          justifyContent: 'space-between',
          width: '100%',
        },
      }}
    />
  </div>
)
