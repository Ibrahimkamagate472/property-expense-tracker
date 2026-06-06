import { Outlet } from 'react-router-dom'
import LoginNav from './LoginNav'
const MainLayout = () => {
  return (
    <>
      <LoginNav />
      <Outlet />
    </>
  )
}
export default MainLayout
