import {useState} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => {
  const [check, setCheck] = useState(false)
  const selectCashType = event => {
    setCheck(event.target.checked)
  }
  return (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        let totalCount = 0
        cartList.forEach(eachItem => {
          totalCount += parseInt(eachItem.quantity) * parseInt(eachItem.price)
        })
        const cashOnStyle = check ? null : 'disabled'

        const overlayStyle = {
          backgroundColor: 'blue',
        }

        return (
          <div className="summary-con">
            <h1 className="summ-heading">
              {' '}
              Order Total: <span className="total">Rs {totalCount}/-</span>{' '}
            </h1>
            <p className="summ-desc"> {cartList.length} Items in cart </p>
            <div className="popup-container">
              <Popup
                modal
                trigger={
                  <button type="button" className="summ-btn">
                    Checkout
                  </button>
                }
              >
                <ul className="payment-method">
                  <li>
                    <button
                      disabled
                      className="payment-option disabled"
                      type="button"
                    >
                      Card
                    </button>
                  </li>
                  <li>
                    <button
                      disabled
                      className="payment-option disabled"
                      type="button"
                    >
                      Net Banking
                    </button>
                  </li>
                  <li>
                    <button
                      disabled
                      className="payment-option disabled"
                      type="button"
                    >
                      UPI
                    </button>
                  </li>
                  <li>
                    <button
                      disabled
                      className="payment-option disabled"
                      type="button"
                    >
                      Wallet
                    </button>
                  </li>
                  <li>
                    <input onChange={selectCashType} type="checkbox" />
                    <button className="payment-option" type="button">
                      Cash on Delivery
                    </button>
                  </li>
                  <li className="total-item-in-cart">
                    Your Selected {cartList.length} items.So you will pay Rs{' '}
                    {totalCount}
                    /-
                  </li>
                </ul>
                <Popup
                  trigger={
                    <button
                      disabled={!check}
                      className={`confirm-btn ${cashOnStyle}`}
                      type="button"
                    >
                      Confirm Order
                    </button>
                  }
                  position="bottom left"
                >
                  <div className="successfully-orederd">
                    Your order has been placed successfully
                  </div>
                </Popup>
              </Popup>
            </div>
          </div>
        )
      }}
    </CartContext.Consumer>
  )
}

export default CartSummary
