import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from '@mui/material'

const ItemCard = ({ item, quantity, type, onAlterCart }) => {

  return (
    <Card sx={{ maxWidth: 345 }}>
      {type === "show" && (
        <CardMedia
          component="img"
          height="140"
          image={item.imagen}
          alt={item.titulo}
        />
      )}
      <CardContent>
        {type === "show" ? (
          <>
            <Grid container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h6" component="div">
                  {item.calificaciones === 0 ? "Sin Calificación" : item.calificaciones } 
                </Typography>
              </Grid>
              <Grid item wrap="nowrap" xs>
                <Typography sx={{ maxHeight: 50, height: 50 }} gutterBottom variant="subtitle1" component="div">
                  {item.titulo}
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography variant="h6" gutterBottom>
                  {item.valor_oferta}
                </Typography>
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            <Grid container direction="row" alignItems="center" spacing={1}>
              <Grid item xs={6}>
                <Typography  gutterBottom variant="caption" component="div">
                  {item.titulo}
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography variant="subtitle2" gutterBottom>
                  x{item.quantity}
                </Typography>
              </Grid>
              <Grid item xs>
                <Button variant="contained" size="small" onClick={() => onAlterCart('remove', item)} >Eliminar</Button>
              </Grid>
            </Grid>
          </>
        )}
      </CardContent>
      <CardActions>
        {type === "show" ? (
          <Button variant="contained" size="small" onClick={() => onAlterCart('add', item)} >Agregar</Button>
        ) : (
          <></>
        )}
      </CardActions>
    </Card>
  )
}

ItemCard.propTypes = {
  item: PropTypes.object.isRequired, 
  quantity: PropTypes.number,
  type: PropTypes.string,
  onAlterCart: PropTypes.func.isRequired
}

ItemCard.defaultProps = {
  quantity: 0,
  type: "show"
}

export default ItemCard
