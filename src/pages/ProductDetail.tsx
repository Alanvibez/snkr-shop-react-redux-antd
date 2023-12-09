import { FC, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { sneakerSelector } from '../store/slices/SneakerSlice'
import Button from '../components/UI/Button'
import { addToCart } from '../store/slices/CartSlice'

const ProductDetail: FC = () => {
  const { shoeId } = useParams()
  const { sneakers } = useAppSelector(sneakerSelector)
  const [isSizePicked, setIsSizePicker] = useState<boolean>(false)
  const [selectedSize, setSelectedSize] = useState<number>()

  const dispatch = useAppDispatch()

  const selectedProduct = sneakers.find(({ id }) => {
    return Number(id) === Number(shoeId)
  })

  const selectSizeHandler = (item: number) => {
    setIsSizePicker(true)
    setSelectedSize(item)
  }

  const addToCartHandler = () => {
    if (selectedSize)
      dispatch(addToCart({ product: selectedProduct, size: selectedSize }))
  }

  return (
    <div className="flex mt-[50px] mb-[100px] justify-evenly">
      <div className="h-[600px] relative">
        <img
          className="h-full"
          src={selectedProduct?.main_picture_url}
          alt=""
        />
        <Button className="absolute right-0 top-0 rounded-full">
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="heart"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
          </svg>
        </Button>
      </div>
      <div className="w-[30vw]">
        <h1 className="text-[42px] font-bold mb-2">
          {selectedProduct?.nickname}
        </h1>
        <div className="mb-4">
          <h2 className="font-bold text-[24px]">
            ${selectedProduct?.retail_price_cents}
          </h2>
        </div>
        <div className="mb-4">
          <span className="font-bold text-[16px]">Description: </span>
          <p className="text-gray-600">{selectedProduct?.story_html}</p>
        </div>
        <div className="mb-4">
          <span className="font-bold text-[16px]">Gender: </span>
          {selectedProduct?.gender}
        </div>
        <div className="mb-4">
          <span className="font-bold text-[16px] mb-4 block">Sizes: </span>
          <div className="flex flex-wrap gap-x-3 gap-y-2">
            {selectedProduct?.size_range.map((item) => (
              <div
                onClick={() => selectSizeHandler(item)}
                className={`${
                  (selectedSize === item &&
                  isSizePicked) &&
                  'bg-yellow-400 text-white'
                } flex items-center justify-center text-[12px] w-8 h-8 rounded border cursor-pointer`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Button
            disabled={!isSizePicked}
            onClick={() => addToCartHandler()}
            variant="solid"
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
