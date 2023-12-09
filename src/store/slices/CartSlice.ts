import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ISneakers } from '../../assets/data'
import { RootState } from '../store'

export interface ICartProducts {
  id: number
  product: ISneakers
  quantity: number
  size: number
}

interface IUserState {
  cartProducts: ICartProducts[]
  wishlistProducts: ISneakers[]
}

const initialUserData: IUserState = {
  cartProducts: [],
  wishlistProducts: [],
}

const CartSlice = createSlice({
  name: 'cart',
  initialState: initialUserData,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartProducts>) => {
      state.cartProducts.push({
        id: action.payload.product.id,
        product: action.payload.product,
        quantity: 1,
        size: action.payload.size,
      })
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartProducts = state.cartProducts.filter(
        (item) => item.id !== action.payload
      )
    },
    incrementQnty: (state, action: PayloadAction<number>) => {
      const foundItem = state.cartProducts.find(
        (item) => item.id === action.payload
      )

      // Если элемент найден, увеличиваем его количество
      if (foundItem) {
        foundItem.quantity++
      }
    },
    decrementQnty: (state, action: PayloadAction<number>) => {
      const foundItem = state.cartProducts.find(
        (item) => item.id === action.payload
      )

      // Если элемент найден, увеличиваем его количество
      if (foundItem) {
        foundItem.quantity--
      }
    },
  },
})

export const { addToCart, removeFromCart, incrementQnty, decrementQnty } =
  CartSlice.actions
export const cartSelector = (state: RootState) => state.CartReducer
export default CartSlice.reducer
