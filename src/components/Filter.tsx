import { FC, useEffect } from 'react'
import { Radio, Select, Form, Checkbox } from 'antd'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import {
  IFilter,
  clearFilter,
  filterSelector,
  updateFilter,
} from '../store/slices/FilterSlice'
import Button from './UI/Button'
import { sneakerSelector, updateUniqueData } from '../store/slices/SneakerSlice'

const Filter: FC = () => {
  const dispatch = useAppDispatch()
  const { gender, brandnames, sizes, colors } = useAppSelector(filterSelector)
  const { uniqueBrandNames, uniqueColors, uniqueSizes } =
    useAppSelector(sneakerSelector)
  const [form] = Form.useForm()

  const brandOptions = uniqueBrandNames.map((sneaker) => ({
    value: sneaker, // Приведем имя к нижнему регистру и заменим пробелы подчеркиваниями
    label: sneaker,
  }))

  const sizeOptions = uniqueSizes.map((size) => ({
    value: size, // Приведем имя к нижнему регистру и заменим пробелы подчеркиваниями
    label: size,
  }))

  const onChangeFrom = (value: IFilter) => {
    dispatch(updateFilter(value))
  }

  const resetForm = () => {
    dispatch(clearFilter())

    form.resetFields()
  }

  useEffect(() => {
    dispatch(updateUniqueData())
  }, [dispatch])

  return (
    <div className="w-[270px] p-5 h-full bg-[white]">
      <Form
        name="basic"
        form={form}
        layout="vertical"
        initialValues={{ remember: true }}
        onValuesChange={onChangeFrom}
        autoComplete="off"
        className="flex flex-col h-full"
      >
        <Form.Item label="Пол" name="gender" initialValue={gender}>
          <Radio.Group>
            <Radio value={'men'}>Мужские</Radio>
            <Radio value={'women'}>Женские</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Брэнд" name="brandnames" initialValue={brandnames}>
          <Select
            mode="multiple"
            placeholder={'Выберите бренд'}
            options={brandOptions}
          />
        </Form.Item>

        <Form.Item label="Размер" name="sizes" initialValue={sizes}>
          <Select
            mode="multiple"
            placeholder={'Выберите размер...'}
            options={sizeOptions}
          />
        </Form.Item>

        <Form.Item label="Цвет" name="colors" initialValue={colors}>
          <Checkbox.Group className="flex flex-wrap justify-between gap-y-3">
            {uniqueColors.map((color, index) => (
              <Checkbox key={index} value={color} className="flex items-center">
                <div
                  className={`w-6 h-6 rounded-full bg-black border`}
                  style={{ background: color }}
                ></div>
              </Checkbox>
            ))}
          </Checkbox.Group>
        </Form.Item>

        <Form.Item className="mt-auto">
          <Button onClick={resetForm} variant={'danger'} className="w-full">
            Очистить фильтр
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Filter
