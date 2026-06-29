import { Outlet } from 'react-router-dom'
import NotLoggedInNavbar from './NotLoggedInNavbar'
import NotLoggedInFooter from './NotLoggedInFooter'

const NotLoggedInLayout = () => {
  return (
    <>
      <NotLoggedInNavbar />
      <Outlet />
      <NotLoggedInFooter />
    </>
  )
}

export default NotLoggedInLayout
