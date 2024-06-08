import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalCount = 0
      cartList.forEach(eachItem => {
        totalCount += parseInt(eachItem.quantity) * parseInt(eachItem.price)
      })
      return (
        <div className="summary-con">
          <h1 className="summ-heading">
            {' '}
            Order Total: <span className="total">Rs {totalCount}/-</span>{' '}
          </h1>
          <p className="summ-desc"> {cartList.length} Items in cart </p>
          <button type="button" className="summ-btn">
            {' '}
            Checkout{' '}
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
