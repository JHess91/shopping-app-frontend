import { useEffect, useState } from "react"

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:4040/')
    .then(response => response.json())
    .then(data => setProducts(data))
    .catch(err => console.error(err))
  }, [])

  const allProducts = products.map(products => <li>{products.name}</li>)

  return(
    <>
    <h1>Home component</h1>
    {allProducts}
    </>
  )
}

export default Home