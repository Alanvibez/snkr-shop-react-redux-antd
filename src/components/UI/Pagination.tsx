import { ConfigProvider, Pagination as PaginationAntd } from 'antd'
import { FC, useMemo, useState } from 'react'

interface PaginationProps {
  itemsPerPage: number,
  items:number
}

const Pagination: FC<PaginationProps> = ({ itemsPerPage = 6, items }) => {
  const [currentPage, setCurrentPage] = useState<number>(1)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const itemsOnPage = useMemo(
    () => items.slice(startIndex, endIndex),
    [items, startIndex, endIndex]
  )

  const paginationTheme = {
    token: {
      colorText: 'white',
      fontSize: 18,
      colorBgContainer: 'rgb(250 204 21)',
      colorPrimary: 'black',
      controlOutlineWidth: 0,
    },
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  
  return (
    <ConfigProvider theme={paginationTheme}>
      <PaginationAntd
        pageSize={10}
        showSizeChanger={false}
        defaultCurrent={1}
        className="flex justify-center"
        style={{ color: 'white' }}
        total={itemsLength}
        onChange={handlePageChange}
      />
    </ConfigProvider>
  )
}

export default Pagination
