import { useState  , useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../component/Loading'

const Products = () => {
  const [data ,  setData] = useState([])
  const [filter ,  setFilter] = useState(data)
  const [loading , setLoading] = useState(false)
  let componentMounted = true

  useEffect(()=>{
    const getProducts = async () => {
      setLoading(true)
      const response = await fetch('https://fakestoreapi.com/products')
      if(componentMounted) {
        setData(await response.clone().json())
        setFilter(await response.json())
        setLoading(false)
      }
      return componentMounted = false
      
    }
    getProducts()
  } , [])

  const filterProducts = cat => {
    const updatedData = data.filter(item => item.category === cat)
    setFilter(updatedData)
  }
  

  const ShowProducts = () => {

    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark m-2" onClick={()=>setFilter(data)}>All</button>
          <button className="btn btn-outline-dark m-2" onClick={()=>filterProducts("women's clothing")}>Women's Clothing</button>
          <button className="btn btn-outline-dark m-2" onClick={()=>filterProducts("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark m-2" onClick={()=>filterProducts("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark m-2" onClick={()=>filterProducts("electronics")}>Electronics</button>
        </div>
        {
          filter.map(product => {
            return (
              <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img src={product.image} className="card-img-top" alt={product.tilte} height='250px' />
                  <div className="card-body">
                    <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                    <p className="card-text lead fw-bold">{`$${product.price}`}</p>
                    <Link to={`/product/${product.id}`} className="btn btn-outline-dark">Buy now</Link>
                  </div>
                </div>
              </div>
            )
          })
        }
      </>
    )
  }

  return (
    <div className='products-page container my-5 py-5'>
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
          <hr />
        </div>
      </div>

      <div className="row justify-content-center">
        { loading ? <Loading /> : <ShowProducts /> }
      </div> 
    </div>
  )
}

export default Products