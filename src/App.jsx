import { Routes, Route } from 'react-router-dom'
import Layout from './mainLayout/Layout'
import { Home, Dashboard } from './pages/index'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index path='/' element={<Home />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Route>
    </Routes>
  )
}
export default App
