import Products from "./Products"

const Home = () => {
  return (
    <div className="home">
      <div className="card text-dark border-0" style={{border: '1px solid blue'}}>
          <div className="container d-flex ">
            <div className="content d-flex flex-column justify-content-center">
              <h1 className="card-title fw-bolder mb-0">New Season Arrivals</h1>
              <p className="card-text lead fs-2 mt-3">Check Out All Trends</p>
            </div>
            <img className="card-img" alt="cart img" src="https://res.cloudinary.com/hapiii/image/upload/v1648550878/eCommerce%20images/jmnsfssymyme9jtias8h.jpg" />
        </div>
      </div>
      
      <Products />
    </div>
  )
}

export default Home