import AppComponent from './components/layouts/AppComponent'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <AppComponent>
      <Outlet />
    </AppComponent>
  )
}

export default App
