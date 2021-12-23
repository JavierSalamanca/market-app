import React from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const CustomizedSnackbar = ({ message, alertActive, onCloseAlert }) => {

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    onCloseAlert(false)
  }

  return (
    <Snackbar open={alertActive} >
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default CustomizedSnackbar