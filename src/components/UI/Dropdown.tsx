import { FC, useState } from 'react'
import { Dropdown as AntDropdown, Space } from 'antd'


interface DropdownProps {
  children:React.ReactNode,
  icon:React.ReactNode,
  width?:number
}

const Dropdown: FC<DropdownProps> = ({children, icon, width = 300}) => {
  const [open, setOpen] = useState(false)

  return (
    <AntDropdown
      arrow={{ pointAtCenter: true }}
      open={open}
      placement="bottomRight"
      dropdownRender={() => (
        <div className={`bg-white p-4 w-[${width}] rounded`}>
          {children}
        </div>
      )}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space className="bg-white h-full w-[40px] justify-center items-center rounded">
          <div className="text-[24px]"
              onClick={() => setOpen(!open)}>
            {icon}
          </div>
        </Space>
      </a>
    </AntDropdown>
  )
}

export default Dropdown
