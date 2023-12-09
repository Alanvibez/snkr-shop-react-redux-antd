import { FC } from 'react'
import { ISneakers } from '../assets/data'
import Button from './UI/Button'
import { HeartOutlined } from '@ant-design/icons'
import Tilt from 'react-parallax-tilt'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { addToCart, cartSelector } from '../store/slices/CartSlice'

interface CardProps {
  shoe: ISneakers
}

const Card: FC<CardProps> = ({ shoe }) => {
  const {
    id,
    grid_picture_url,
    retail_price_cents,
    nickname,
    release_year
  } = shoe

  const cart = useAppSelector(cartSelector)

  const dispatch = useAppDispatch()

  return (
    <Tilt
      key={shoe.id}
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      scale={1.02}
      glareEnable={false}
    >
      <div className="h-auto w-[270px] flex flex-col text-black bg-[#ffffff] p-5 rounded cursor-pointer">
        <Link to={`/product-details/${id}`} className="mb-4 bg-gray-100 rounded ">
          <Tilt tiltMaxAngleX={17} tiltMaxAngleY={17} scale={1.2}>
            <img
              src={grid_picture_url}
              width={200}
              height={200}
              alt=""
              loading="lazy"
              className="mx-auto pl-4 rotate-[20deg] drop-shadow-[0_10px_5px_black] duration-200 ease-linear hover:drop-shadow-[0_8px_8px_black]"
            />
          </Tilt>
        </Link>
        <div className="flex flex-col h-full">
          <h1 className="text-inherit text-[20px] font-bold mb-2 min-h-[40px]">
            {nickname}
          </h1>
          <div className="flex items-center justify-between">
            <div className="text-black text-[14px] font-bold">
              ${retail_price_cents}
            </div>
          </div>
          <p className="mb-5">Дата релиза: {release_year}</p>
          <div className="flex gap-2 mt-auto">
            {cart.cartProducts.some((item) => item.id == id) ? (
              <Button><Link to={'/cart/'}>Go to cart</Link></Button>
            ):(
              <Button className='w-full' onClick={() => dispatch(addToCart(shoe))}>{"Add to cart"}</Button>
            )}
            <Button>
              <HeartOutlined />
            </Button>
          </div>
        </div>
      </div>
    </Tilt>
  )
}

export default Card
