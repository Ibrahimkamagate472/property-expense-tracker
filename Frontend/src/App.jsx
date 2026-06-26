import { Routes, Route } from 'react-router-dom'
import Layout from './mainLayout/Layout'
import {
  Home,
  Dashboard,
  Properties,
  Login,
  Register,
  SecurityQuestion,
} from './pages/index'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='SecurityQuestion' element={<SecurityQuestion />} />
        <Route path='register' element={<Register />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='properties' element={<Properties />} />
      </Route>
    </Routes>
  )
}
export default App
