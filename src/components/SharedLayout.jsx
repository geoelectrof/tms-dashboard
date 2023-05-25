import Navigation from './Navigation'
import { Outlet } from 'react-router'

const SharedLayout = () => {
  return (
    <>
        <Navigation />
        <Outlet />
    </>
  )
}
export default SharedLayout