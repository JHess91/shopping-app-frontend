import { Link } from "react-router-dom"

export const ProductCard = ({product, index}) => {
  return (
    <Link state={product} to='/single-product' className='products-item'>
      <img src={`https://source.unsplash.com/random?sig=${index}`} alt="" />
      <h4>{product.name}</h4>
      <p>{product.description}</p>
      <p>
        <b>Price: </b> {product.price}
      </p>
      <p>
        <b>Sku: </b> {product.sku}
      </p>
    </Link>
  )
}

