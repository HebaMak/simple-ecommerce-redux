import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { useDispatch} from "react-redux"
import {addCart} from '../redux/action/actions'
import Loading from '../component/Loading'

const ProductDetails = () => {

  const {id} = useParams()
  const [product, setProduct] = useState([])
  const [loading , setLoading] = useState(false)
  const dispatch = useDispatch()

const addProduct = product => {
  dispatch(addCart(product))
}

  useEffect(()=> {
    const getProduct = async () => {
      setLoading(true)
      const response = await fetch(`https://fakestoreapi.com/products/${id}`)
      setProduct(await response.json())
      setLoading(false)
    }
    getProduct()
  },[id])

  const ShowProduct = () => {
    return (
      <div className="product-details row">
        <div className="col-md-6 text-center">
          <img src={product.image} alt={product.title}/>
        </div>
        <div className="col-md-6">
          <h4 className="display-5">{product.title}</h4>
          <p className="rating lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">{`$${product.price}`}</h3>
          <p className="lead">{product.description}</p>
          <button className="btn btn-outline-dark px-4 py-2" onClick={()=>addProduct(product)}>Add to Cart</button>
          <Link to='/cart' className="btn btn-dark ms-2 px-3 py-2">Go to Cart</Link>
        </div>
      </div>
    )
  }
  
  return (
    <>
      <div className="container py-5 ">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </>
  )
}

export default ProductDetails