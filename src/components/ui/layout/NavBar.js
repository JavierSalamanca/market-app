import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom"
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  Grid,
  Menu,
  Tooltip,
  Toolbar,
  Typography} from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import ItemCard from '../../ItemCard'

const NavBar = ({ productsInCart, onAlterCart }) => {
  const navigate = useNavigate()
  const [anchorElCart, setAnchorElCart] = useState(null)

  const handleOpenCart = (event) => {
    setAnchorElCart(event.currentTarget)
  }

  const handleCloseCart = () => {
    setAnchorElCart(null)
  }

  const handleAlterCart = (action, item) => {
    handleCloseCart()
    onAlterCart(action, item)
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            MarketPlace
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Abrir Carro">
              <Button variant="otulined" onClick={handleOpenCart}>
                <Badge badgeContent={productsInCart.length} color="secondary">
                  <ShoppingCartOutlinedIcon fontSize="large" />
                </Badge>
              </Button>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElCart}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElCart)}
              onClose={handleCloseCart}
            >
              {productsInCart.length > 0 ? (
                  <Box p={2}>
                    <Grid container justifyContent="center" direction="column" spacing={{ xs: 2, md: 3 }}>
                      {productsInCart.map((item) => (
                        <Grid key={ item.id } item xs={3}>
                          <ItemCard key={item.id} item={item} type="cart" onAlterCart={handleAlterCart} />
                        </Grid>
                      ))}
                      <Grid item xs={12}>
                        <Button variant="contained" size="small" fullWidth onClick={() => navigate("/carro")} >Pagar</Button>
                      </Grid>
                    </Grid>
                  </Box>
                ) : (
                  <Box p={2}><h5>No ha agregado productos al carro</h5></Box>
                )
              }
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

NavBar.propTypes = {
  productsInCart: PropTypes.array.isRequired,
  onAlterCart: PropTypes.func.isRequired
}

export default NavBar