import { NavLink } from "react-router-dom"

const Navigation = () => {
  return (
    <nav>
        <NavLink to='/'>Summary</NavLink>
        <NavLink to='/transfers'>Transfers</NavLink>
        <NavLink to='/performance'>Performance</NavLink>
    </nav>
  )
}
export default Navigation