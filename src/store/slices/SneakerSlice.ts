import { createSlice } from '@reduxjs/toolkit'
import { ISneakers, data } from '../../assets/data'
import { RootState } from '../store'

const initialState: {
  sneakers: ISneakers[]
  uniqueBrandNames: string[]
  uniqueColors: string[]
  uniqueSizes:number[]
} = {
  sneakers: data.sneakers,
  uniqueBrandNames: [],
  uniqueColors: [],
  uniqueSizes:[
    10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17,
    17.5, 18, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5,
  ]
}

const SneakerSlice = createSlice({
  name: 'sneaker',
  initialState,
  reducers: {
    updateUniqueData: (state) => {
      const uniqueColors = [
        ...new Set(state.sneakers.flatMap((sneaker) => sneaker.color)),
      ]
      const uniqueBrandNames = [
        ...new Set(state.sneakers.map((sneaker) => sneaker.brand_name)),
      ]

      return {
        ...state,
        uniqueColors,
        uniqueBrandNames,
      }
    },
  },
})

export const { updateUniqueData } = SneakerSlice.actions
export const sneakerSelector = (state: RootState) => state.SneakerReducer
export default SneakerSlice.reducer
