import React from 'react'
import './intro.css'
import bg from '../../assets/mypic.png'
import {Link} from 'react-scroll'
import btnimg from'../../assets/hireme.png'
const Intro = () => {
  return (
   <section id='intro'>
    <div className='introcontent'>
        <span className='hello'> hello,</span>
        <span className='introtext'>i'm <span className='introname'>Dr.Amr Elattar </span><br/>Website Designer</span>
      <p className='intropara'>iam skilled web designer with experience in creating<br/> visual appealing and user-friendly websites</p>
      <Link><button className='btn' > <img src={btnimg} alt='hire me' className='btnimg'/>Hire me</button></Link>

    </div>
    <img src={bg} alt='portfile' className='bg'/>

   </section>
  )
}

export default Intro