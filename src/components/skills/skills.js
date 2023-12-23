import React from 'react'
import './skills.css'
import Uidesign from'../../assets/ui-design.png'
import Webdesign from '../../assets/website-design.png'
import Appdesign from '../../assets/app-design.png'
const Skills = () => {
  return (
  <section id='skills'>
   <span className='skilltitle'> what I do </span>
   <span className='skilldesc'>iam a skilled and passionate web designer with experience in creating in visual appealing and user-friendly website.i have a strong understanding of design and a keen eye for details.i'am proficient in html,css, javascript,react,sass and githup as well as design software such as Adobephotoshop and illustrator </span>
  <div className='skillbars'>
    <div className='skillbar'>
      <img src={Uidesign} alt='' className='skillbarimg'/>
      <div className='skillbartext'>
        <h2>UI/UX Design</h2>
        <p>this is a demo text,you can write your own content here.</p>
      </div>
    </div>
    <div className='skillbar'>
      <img src={Webdesign} alt='' className='skillbarimg'/>
      <div className='skillbartext'>
        <h2>Website Design</h2>
        <p>This demo text can be changed while making the production ready website</p>
      </div>
    </div>
    <div className='skillbar'>
      <img src={Appdesign} alt='' className='skillbarimg'/>
      <div className='skillbartext'>
        <h2>App design</h2>
        <p> you can write text related to mobile app development</p>
      </div>
    </div>





  </div>
  
  
  
  
  </section>
  )
}

export default Skills