import { FC } from 'react'
import { useAppDispatch } from '../store/hooks'
import {
  ICartProducts,
  decrementQnty,
  incrementQnty,
  removeFromCart,
} from '../store/slices/CartSlice'
import Button from '../components/UI/Button'
import { RestOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

interface CartListProps {
  cartItems: ICartProducts[]
}

const CartList: FC<CartListProps> = ({ cartItems }) => {
  const dispatch = useAppDispatch()

  const QntyHandler = (type: string, id: number, quantity: number) => {
    if (type == 'increment') {
      dispatch(incrementQnty(id))
    }

    if (type == 'decrement' && quantity > 1) {
      dispatch(decrementQnty(id))
    }

    if (type == 'decrement' && quantity === 1) {
      dispatch(removeFromCart(id))
    }
  }
  return (
    <div className=" bg-white rounded shadow p-5">
      {cartItems.map(({ id, product, quantity, size }) => (
        <div key={id} className="flex gap-4 text-black mb-4">
          <div>
            <div className="bg-gray-100 rounded mb-4">
              <img
                src={product.grid_picture_url}
                width={300}
                alt=""
                loading="lazy"
                className="mx-auto pl-4 rotate-[20deg] drop-shadow-[0_10px_5px_black] duration-200 ease-linear hover:drop-shadow-[0_8px_8px_black]"
              />
            </div>
            <div className="flex gap-2 items-center">
              <Button
                variant={quantity > 1 ? 'default' : 'danger'}
                onClick={() => QntyHandler('decrement', id, quantity)}
                className="min-w-[58px]"
              >
                {quantity > 1 ? '-' : <RestOutlined />}
              </Button>
              <div className="flex-1 text-center">{quantity}</div>
              <Button
                onClick={() => QntyHandler('increment', id, quantity)}
                className="min-w-[58px]"
              >
                +
              </Button>
            </div>
          </div>

          <div className="w-full">
            <div className="flex items-center justify-between">
              <Link to={`/product-details/${id}`} className="text-inherit text-[20px] font-bold">
                {product.nickname}
              </Link>
              <div className="text-black text-[14px] font-bold">
                ${product.retail_price_cents}
              </div>
            </div>
            <p className='font-semibold text-gray-400'>Color: {product.color}</p>
            <p className='font-semibold text-gray-400'>Gender: {product.gender}</p>
            <p className='font-semibold text-gray-400'>Size: {size}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CartList
