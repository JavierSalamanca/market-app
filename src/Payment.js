import React, {useState} from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'
import { formatCurrency } from './helpers/formatCurrency'
import Table from './components/ui/Table'
import ClientForm from './components/ClientForm'
import { Grid } from '@mui/material'
import { v4 as uuidv4 } from 'uuid'
import { postItem } from './services/items'
import CustomizedSnackbar from './components/ui/snackBar'
import { useNavigate } from "react-router-dom"

const createData = (imagen, titulo, quantity, valor_oferta, total) => {
  return [ imagen, titulo, quantity, valor_oferta, total ]
}

const head = ['Producto', '', 'Cantidad', 'Valor oferta', 'Valor Total']

const Payment = () => {
  const navigate = useNavigate()
  const [productsInCart, setProductsInCart] = useLocalStorage('productsInCart', [])
  const [alertActive, setAlertActive] = useState(false)
  let totalValue = 0
  let rows = productsInCart.map((item) => {
    totalValue = totalValue + item.valor_oferta_plano * item.quantity
    return createData(item.imagen, item.titulo, item.quantity, item.valor_oferta, formatCurrency(item.valor_oferta_plano * item.quantity))
  })
  rows.push(createData('', '', '', 'Total a pagar', formatCurrency(totalValue)))

  const handleCloseAlert = () => {
    setProductsInCart(false)
    navigate("/")
  }

  const handleSubmit = (data) => {
    const body = {
      id: uuidv4(),
      nombre: data.name,
      email: data.email,
      telefono: data.phone,
      total_pago: totalValue,
      productos: productsInCart.map((item) => {
        return({
          id: item.id,
          precio: item.valor_oferta_plano,
          cantidad: item.quantity
        })
      })
    }
    postItem(body)
      .then( resp => {
        console.log(resp.data)
        setAlertActive(true)
      })

    
  }

  return (
    <>
      <Grid container p={3} spacing={3}>
        <Grid item xs={6}>
          <Table head={head} rows={rows} />
        </Grid>
        <Grid item md={6} xs={4}>
          <ClientForm onSubmit={handleSubmit} />
        </Grid>
      </Grid>
      <CustomizedSnackbar message="Registro guardado con exito!" alertActive={alertActive} onCloseAlert={handleCloseAlert} />
    </>
  )
}

export default Payment
