import React from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'
import Layout from './components/Layout'
import ProductsGrid from './components/ProductsGrid'

const MarketApp = () => {
  const [productsInCart, setProductsInCart] = useLocalStorage('productsInCart', [])

  const handleAlterCart = (action, item) => {
    if (action === 'add') {
      handleAddItem(item)
    } else if(action === 'remove') {
      handleDeleteItem(item)
    }
  }

  const handleAddItem = (item) => {
    const productIndex = productsInCart.findIndex( (element) => element.id === item.id )
    if ( productIndex > -1 ) {
      let newProducts = productsInCart
      newProducts[productIndex].quantity = newProducts[productIndex].quantity + 1
      setProductsInCart(newProducts)
    } else {
      setProductsInCart([{...item, quantity: 1}, ...productsInCart])
    }
    localStorage.setItem('productsInCart', JSON.stringify(productsInCart))
  }

  const handleDeleteItem = (item) => {
    const productIndex = productsInCart.findIndex( (element) => element.id === item.id )
    if ( productIndex > -1 ) {
      let newProducts = productsInCart
      newProducts.splice(productIndex, 1)
      setProductsInCart(newProducts)
    }
    localStorage.setItem('productsInCart', JSON.stringify(productsInCart))
  }

  return (
    <Layout productsInCart={productsInCart} onAlterCart={handleAlterCart}  >
      <ProductsGrid onAlterCart={handleAlterCart} />
    </Layout>
  )
}

export default MarketApp
