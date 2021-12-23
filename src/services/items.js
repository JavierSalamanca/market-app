import { parseLinkHeader } from "../helpers/parseLinkHeader"

export const getItems = async( {sort, order, page} ) => {

  const url = `http://localhost:3001/productos?_sort=${ sort }&_order=${ order }&_limit=20&_page=${ page }`
  const resp = await fetch( url )
  const responseData = await resp.json()
  const data = responseData.map( item => {
    return {
      id: item.id_descuento,
      titulo: item.titulo,
      imagen: item.imagen,
      valor_oferta: item.valor_oferta,
      valor_oferta_plano: item.valor_oferta_plano,
      calificaciones: item.calificaciones ? item.calificaciones : 0 
    }
  })

  return data;
}

export const postItem = async(body) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }

  const response = await fetch('http://localhost:3001/pedidos', requestOptions)
  const data = await response.json()
  return data
}

let currentUrl = "http://localhost:3000/us-counties?_limit=20&_page=1"
function paginate( direction ) {
   fetch( currentUrl ).then( response => {
    let linkHeaders = parseLinkHeader( response.headers.get( "Link" ) );
    if ( !!linkHeaders[ direction ] ) {
        currentUrl = linkHeaders[ direction ];
        
    }
  });
}
