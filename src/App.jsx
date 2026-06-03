import { Routes, Route } from 'react-router-dom'
import Layout from './mainLayout/Layout'
import { Home, Tracker } from './pages/index'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index path='/' element={<Home />} />
        <Route path='tracker' element={<Tracker />} />
      </Route>
    </Routes>
  )
}
export default App
