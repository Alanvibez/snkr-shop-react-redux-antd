import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface IFilter {
    gender: string
    brandnames: string[]
    sizes: number[]
    colors: string[],
    sort: string
  }

const initialState: IFilter = {
    gender:'',
    brandnames:[],
    sizes:[],
    colors:[],
    sort:''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilter: (state, action: PayloadAction<IFilter>) => {
        return { ...state, ...action.payload };
    },
    addSort: (state, action:PayloadAction<string>) => {
      return {...state, sort:action.payload}
    },
      clearFilter: () => initialState
  },
})

export const { updateFilter, clearFilter, addSort } = filterSlice.actions
export const filterSelector = (state: RootState) => state.FilterReducer;
export default filterSlice.reducer
