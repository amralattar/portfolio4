import React, { useState } from 'react'
import"./navbar.css"
import logo from'../../assets/logo_transparent.png';
import contactimg from '../../assets/contact.png'
import {Link} from 'react-scroll'
import menu from '../../assets/menu.png'
const Navbar = () => {
  const [showmenu,setshowmenu]=useState(false)
  return (
   <nav className='navbar'>
    <img src={logo} alt='logo' className='logo'/>
    <div className='desktopmenu'>
<Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktoplistmenuitem'>home</Link>
<Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktoplistmenuitem'>about</Link>
<Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktoplistmenuitem'>portfolio</Link>
<Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500}  className='desktoplistmenuitem'>clients</Link>

    </div>
    <button className='desktopmenubtn'>
        <img src={contactimg} alt='' className='desktopmenuimg' onClick={()=>{document.getElementById('contact').scrollIntoView({behavior:'smooth'})}}  />contact me </button>
        <img src={menu} alt='logo' className='mobmenu' onClick={()=>setshowmenu(!showmenu)} />
    <div className='navmenu' style={ {display: showmenu?'flex':"none"}}>
<Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listitem' onClick={()=>setshowmenu(false)}>home</Link>
<Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listitem' onClick={()=>setshowmenu(false)}>about</Link>
<Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listitem' onClick={()=>setshowmenu(false)}>portfolio</Link>
<Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500}  className='listitem' onClick={()=>setshowmenu(false)}>clients</Link>
<Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}  className='listitem' onClick={()=>setshowmenu(false)}>contact</Link>
</div>
   </nav>
  )
}

export default Navbar