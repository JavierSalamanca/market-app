import React, {useEffect, useState} from 'react'
import { useForm } from 'react-hook-form'
import { Button, Card, CardContent, Grid } from '@mui/material'
import Input from './form/Input'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'

const ClientSchema = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  phone: Joi.number().required()
})

const ClientForm = ({ onSubmit }) => {
  const [defaultClient, setDefault] = useState({name: '', email: '', phone: ''})
  const { handleSubmit, control, formState:{ errors } } = useForm({
    defaultValues: defaultClient,
    resolver: joiResolver(ClientSchema)
  })
   
  return (
    <Card >
      <CardContent>
        <Grid container direction="column" spacing={1}>
          <Grid item xs={12}>
            <p>Datos del pedido</p>
          </Grid>
          <Grid item xs={12}>
            <Input 
              name="name" 
              type="text"
              error={errors.name ? true : false}
              helperText={errors.name ? 'El nombre es obligatorio' : null}
              control={control}
              label="Nombre" />
          </Grid>
          <Grid item xs={12}>
            <Input 
              name="email" 
              type="email" 
              error={errors.email ? true : false}
              helperText={errors.email ? 'Debe ser un email valido' : null}
              control={control} 
              label="Email" />
          </Grid>
          <Grid item xs={12}>
            <Input 
              name="phone" 
              type="number" 
              error={errors.phone ? true : false}
              helperText={errors.phone ? 'Debe ser un telefono valido' : null}
              control={control} 
              label="Telefono" />
          </Grid>
          <Grid item xs>
          <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>Confirmar Compra</Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default ClientForm