import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const SingleProduct = () => {
  const [form, setForm] = useState({})
  const [showForm, setShowForm] = useState(false)
  const location = useLocation()
  const { name, description, sku, price, exp, index } = location.state

  const handleDelete = (event) => {
    event.preventDefault()
    console.log('Sending to API for delete')

    fetch(`${process.env.REACT_APP_API_ENDPOINT}?name=${name}`, {
      method: 'DELETE', // GET is default so we need to use method: 'DELETE'
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err))
  }

  const handleUpdate = (event) => {
    event.preventDefault()
    console.log('Sending to API to Update product')
    // const addSpecial = { special: true }

    fetch(`${process.env.REACT_APP_API_ENDPOINT}?name=${name}`, {
      method: 'PUT', // GET is default so we need to use method: 'DELETE'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err))
  }

  const handleForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }


  return (
    <div className="container">
      <div className="single-product">
        <img src={`https://source.unsplash.com/random?sig=${index}`} alt="" />
        <h1>{name}</h1>
        <h3>{description}</h3>
        <h4>{sku}</h4>
        <p>
          <b>Price:</b>
          {price}
        </p>
        <p>
          <b>Exp:</b>
          {exp}
        </p>

        {showForm && (
          <form className="add-form">
            <label htmlFor="">Product Name:</label>
            <input
              onChange={(event) => handleForm(event)}
              type="text"
              placeholder="ex. Rice"
              name="name"
              id="name"
              defaultValue={name}
            />

            <label htmlFor="">Sku</label>
            <input
              onChange={(event) => handleForm(event)}
              type="number"
              min={0}
              placeholder="ex. 123456"
              name="sku"
              id="sku"
              defaultValue={sku}
            />

            <label htmlFor="">Description</label>
            <input
              onChange={(event) => handleForm(event)}
              type="text"
              placeholder="ex. Fried rice"
              name="description"
              id="description"
              defaultValue={description}
            />

            <label htmlFor="">Price</label>
            <input
              onChange={(event) => handleForm(event)}
              type="text"
              placeholder="ex. $2.21"
              name="price"
              id="price"
              defaultValue={price}
            />

            <label htmlFor="">Exp</label>
            <input
              onChange={(event) => handleForm(event)}
              type="number"
              min={0}
              placeholder="ex. 2024"
              name="exp"
              id="exp"
              defaultValue={exp}
            />
            <button onClick={handleUpdate}>Update Product</button>
          </form>
        )}

        <button onClick={handleDelete}>Delete Product</button>
        <button onClick={() => setShowForm(!showForm)}>Show Form</button>
      </div>
    </div>
  )
}

export default SingleProduct
