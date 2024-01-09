import "../SCSS/Form.scss"
import Products from '../assets/Products.jsx'

const Form = () => {
  return (
    <>
    <nav>
        <button Products>Products </button>
        <button Form> Form</button>
    </nav>
    <h1>Pridėti prekę</h1>
    <form action="#">
        <input type="url" placeholder="img"/>
        <input type="text" placeholder="title"/>
        <input type="number" step="0.01" placeholder="price"/>
        <button>Submit</button>
    </form>
    </>
  )
}

export default Form