import { FC } from 'react'
import { Input } from 'antd'
import Dropdown from '../components/UI/Dropdown'
import CardList from '../components/CardList'
import Sort from '../components/Sort'
import { SortAscendingOutlined } from '@ant-design/icons'
import Filter from '../components/Filter'

const Shop: FC = () => {
  return (
    <div className="flex h-full">
      <Filter/>
      <div className="flex-1 h-full py-4 px-7 overflow-y-scroll">
        <div className="flex gap-5 mb-5">
          <Input
            placeholder="Choose your sneakers"
            className="h-10 text-black font-bold mx-auto"
          />
          <Dropdown icon={<SortAscendingOutlined />}>
            <Sort />
          </Dropdown>
        </div>
        <CardList />
      </div>
    </div>
  )
}

export default Shop
