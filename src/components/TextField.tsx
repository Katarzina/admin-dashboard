import React from 'react';
import TextField from '@material-ui/core/TextField'
import { useCallback } from 'react'

type TextFieldProps = {
  regex: RegExp
  onChange: (e: any) => void
}

const TextFieldRegex = ({ regex, onChange, ...rest }: TextFieldProps) => {
  const handleChange = useCallback(
    (e: any) => {
      e.currentTarget.value = e.currentTarget.value.replace(regex, '')
      onChange(e)
    },
    [onChange, regex]
  )

  return <TextField onChange={handleChange} {...rest} />
}

export default React.memo(TextFieldRegex)
