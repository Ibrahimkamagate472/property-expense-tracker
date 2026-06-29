import { Outlet } from 'react-router-dom'
import LoggedInNavbar from './LoggedInNavbar'
import LoggedInFooter from './LoggedInFooter'
const MainLayout = () => {
  return (
    <>
      <LoggedInNavbar />
      <Outlet />
      <LoggedInFooter />
    </>
  )
}
export default MainLayout
