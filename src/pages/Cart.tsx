import { FC } from 'react'
import { useAppSelector } from '../store/hooks'
import { cartSelector } from '../store/slices/CartSlice'
import CartList from '../components/CartList'
import { Empty } from 'antd'

const Cart: FC = () => {
  const { cartProducts } = useAppSelector(cartSelector)

  return (
    <>
      {!cartProducts.length ? (
        <div className="h-full flex justify-center items-center">
          <Empty description={'The cart is empty!'} />
        </div>
      ) : (
        <div className='p-10'>
        <h1 className='text-[24px]'>Cart</h1>
        <div className="flex justify-between ">
          <CartList cartItems={cartProducts} />
          <div className=" bg-white p-10 h-[200px] sticky top-10">
            <div className="text-[50px]">Total Items:{cartProducts.length}</div>
          </div>
        </div>
        </div>
      )}
    </>
  )
}

export default Cart
