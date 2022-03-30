import React from 'react'

const About = () => {
  return (
    <div className='container aboutpage'>
      <h3> About collection app </h3>
      <p>
        this is a simple ecommerce app made by using react.js and redux
      </p>

      <h5>featutes in this app</h5>
      <ul>
        <li>fetch data from api https://fakestoreapi.com.</li>
        <li>app formed of simple pages Home, Products, Product details and Cart. </li>
        <li>Navbar has an icon "Cart" which direct to the cart page and show the number of items in the cart.</li>
        <li>in the Home page and Products page there is a display to the 20 product and some buttons to filter the products according to the type.</li>
        <li>each product show an image, title, price and icon to by it.</li>
        <li>buy now icon direct to the details page of each product in which you can see more details about the product and also you can add it to the cart, you can go to the cart page as well.</li>
        <li>in cart page you can see the image of the product and the price multiple by number of products you select.</li>
        <li>in cart page also you can choose to buy more than one item or even not to buy any and delte it from the cart.</li>
        <li>I use Bootsrtap in styling and the app is responsive for different screens</li>
      </ul>

      <h5>featutes i hope to add to this app</h5>
      <ol>
        <li>add favorites page with hearts which effect on the home page, product page, and details page.</li>
        <li>add total price to the cart.</li>
        <li>use local storage to save the selected products and total price.</li>
      </ol>
    </div>
  )
}

export default About