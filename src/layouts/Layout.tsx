import { FC } from 'react'
import { Layout as AntLayout } from 'antd'
import Header from '../components/Header'
import NavRoutes from '../routes/NavRoutes'


const { Content } = AntLayout

const Layout: FC = () => {
  return (
    <AntLayout className="h-screen flex flex-col">
      <Header />
      <Content className="flex-1 h-full overflow-y-auto">
        <NavRoutes/>
      </Content>
    </AntLayout>
  )
}

export default Layout
