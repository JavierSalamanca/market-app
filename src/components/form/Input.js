import TextField from '@material-ui/core/TextField'
import { Controller } from 'react-hook-form'
import React from 'react'

const FormInputText = ({ name, type, control, rules, label, error = null, ...other }) => {
  return (
    <form>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <TextField 
            fullWidth 
            type={type} 
            onChange={onChange} 
            value={value} 
            label={label} 
            variant="outlined" 
            {...(error && { error: true })} 
            {...other} 
          />
        )}
      />
    </form>
  )
}

export default FormInputText