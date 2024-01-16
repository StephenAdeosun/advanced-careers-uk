import Logo from '../assets/logo.svg'
// import {Link} from 'react-router-dom'
import Menu from '../assets/hamburger.svg'
function Navbar() {
  return (
    <div className='flex md:hidden  py-[16px] px-[24px] justify-between w-full' style={{boxShadow:'0px 4px 12px 0px rgba(0, 0, 0, 0.08)'}}>
        <img src={Logo} alt="" />
        <img src={Menu} alt="" />
    </div>
  )
}

export default Navbar




