import './navber.css'
import logo from '../../assets/logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


function Navber() {
  

    return (
    <>
    <div className='navber'> 
        <img src={logo} alt="" />
      <ul className='nav-menu'>
        <li> <AnchorLink className='anchor-link'  href='#home'> <p onClick={()=>setMenu("hone")}> Home</p></AnchorLink> </li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#about1'> <p onClick={()=>setMenu("about")}> About Me</p></AnchorLink></li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#services'> <p onClick={()=>setMenu("services")}> Services</p></AnchorLink></li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#work'> <p onClick={()=>setMenu("work")}> Portfolio</p></AnchorLink></li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#contact'> <p onClick={()=>setMenu("contact")}> Contact</p> </AnchorLink></li>
      </ul>
      <div className='nav-connect'> Connect With Me</div>
  
    </div>
      </>
    )
  }
  
  export default Navber