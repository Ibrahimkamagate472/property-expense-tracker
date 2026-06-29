import { Routes, Route } from 'react-router-dom'
import NotLoggedInLayout from './mainLayout/NotLoggedInLayout'
import LoggedInLayout from './mainLayout/LoggedInLayout'
import {
  Home,
  Dashboard,
  Properties,
  Login,
  Register,
  SecurityQuestion,
  Renovations,
  Tenants,
} from './pages/index'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NotLoggedInLayout />}>
        <Route index path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='SecurityQuestion' element={<SecurityQuestion />} />
        <Route path='register' element={<Register />} />
      </Route>
      <Route path='/' element={<LoggedInLayout />}>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='properties' element={<Properties />} />
        <Route path='renovations' element={<Renovations />} />
        <Route path='Tenants' element={<Tenants />} />
      </Route>
    </Routes>
  )
}
export default App
