import React from 'react'
import PropTypes from 'prop-types'
import NavBar from './ui/layout/NavBar'

const Layout = ({ productsInCart, children, onAlterCart }) => {
  return (
    <div>
      <NavBar productsInCart={productsInCart} onAlterCart={onAlterCart} />
      <main>
          {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
