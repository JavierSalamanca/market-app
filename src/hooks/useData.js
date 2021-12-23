import { useState, useEffect } from 'react'
import { getItems } from '../services/items';

export const useFetchProducts = ( filter ) => {
  const [state, setState] = useState({
      data: [],
      loading: true
  })

  useEffect( () => {
    getItems( filter )
      .then( items => {   
        setState({
          data: items,
          loading: false
        })
      })

  }, [filter])

  return state
}

