import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Grid, Pagination } from '@mui/material'
import { useFetchProducts } from '../hooks/useData'
import BasicSelect from './ui/Select'
import ItemCard from './ItemCard'

const filters = [
  {id: 0, sort: 'titulo', order: 'asc', detail: 'Titulo', page: 1}, 
  {id: 1, sort: 'valor_oferta_plano', order: 'asc', detail: 'Menor Precio', page: 1}, 
  {id: 2, sort: 'valor_oferta_plano', order: 'desc', detail: 'Mayor Precio', page: 1}, 
  {id: 3, sort: 'calificaciones', order: 'desc', detail: 'Mejor Calificación', page: 1}
]

const ProductsGrid = ({ onAlterCart }) => {
  const [filter, setFilter] = useState({sort: 'titulo', order: 'asc', detail: 'Titulo', page: 1})
  const { data, loading } = useFetchProducts( filter )

  const handleChangePage = (event, page) => {
    setFilter({...filter, page: page})
  }

  if (loading) return <h3>Cargando...</h3> 
  return (
    <>
      <div className="card-grid">
        <Grid container justifyContent="flex-end" alignItems="center" direction="row">
          <Grid item >
            <BasicSelect filters={filters} selectedFilter={filter} setFilter={setFilter}/>
          </Grid>
          <Grid item >
            <Pagination count={3} color="primary" onChange={handleChangePage} />
          </Grid>
        </Grid>
        <Box p={2} >
          <Grid container justifyContent="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
              data.map( item => (
                <Grid key={ item.id } item xs={3}>
                  <ItemCard item={item} type="show" onAlterCart={onAlterCart} />
                </Grid>
              ))
            }
          </Grid>
        </Box>
      </div>
    </>
  )
}

ProductsGrid.propTypes = {
  onAlterCart: PropTypes.func.isRequired
}

export default ProductsGrid