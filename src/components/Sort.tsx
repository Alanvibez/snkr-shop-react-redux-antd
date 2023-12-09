import { FC } from 'react'
import Button from './UI/Button'
import { useAppDispatch } from '../store/hooks'
import { addSort} from '../store/slices/FilterSlice'

const Sort: FC = () => {
  const dispatch = useAppDispatch()

  const handlerSort = (sort:string) => {
    dispatch(addSort(sort))
  }

  return (
    <div className="flex flex-col gap-4">
      <Button onClick={() => handlerSort('cheaper')}>Сначала дешевые</Button>
      <Button onClick={() => handlerSort('expensive')}>Сначала дороже</Button>
      <Button onClick={() => handlerSort('new')}>Сначала новые</Button>
    </div>
  )
}

export default Sort
