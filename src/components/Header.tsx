import { FC } from 'react'
import { Header as HeaderAntd } from 'antd/es/layout/layout'
import { Link } from 'react-router-dom'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { Badge } from 'antd'
import { useAppSelector } from '../store/hooks'
import { cartSelector } from '../store/slices/CartSlice'

const Header: FC = () => {
  const { cartProducts } = useAppSelector(cartSelector)
  return (
    <HeaderAntd className="flex items-center justify-between bg-[#111111] border-b-[1px] border-[#333333] text-white">
      <Link to="/" className="font-bold text-[24px]">
        SneakerShop.
        <span className="text-yellow-400 underline">dev</span>
      </Link>
      <nav className="flex items-center gap-4 font-bold text-[16px] list-none">
        <Link to={'/'} className="uppercase">
          Home
        </Link>
        <Link to={'/shop'} className="uppercase">
          Shop
        </Link>
        <Badge count={cartProducts.length}>
          <Link to={'/cart'}>
            <ShoppingCartOutlined className="text-white text-[24px] hover:text-yellow-400" />
          </Link>
        </Badge>
      </nav>
    </HeaderAntd>
  )
}

export default Header
