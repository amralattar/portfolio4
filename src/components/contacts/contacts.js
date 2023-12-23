import React, {useRef} from 'react';
import "./contacts.css"
import microsoft from'../../assets/microsoft.png'
import adobe from'../../assets/adobe.png'
import facebook from'../../assets/facebook.png'
import walmart from'../../assets/walmart.png'
import facebookicon from'../../assets/facebook-icon.png'
import twittericon from'../../assets/twitter.png'
import youtubeicon from'../../assets/youtube.png'
import instgramicon from'../../assets/instagram.png'
import emailjs from '@emailjs/browser';
 const Contacts = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_lwjsdy6', 'template_fmhsugc', form.current, 'z7N0DirFknhclF8iu')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email sent!')
          }, (error) => {
              console.log(error.text);
          });
      };
    
  return (
<section id='contactpage'>
    <div id='clients'>
<h1 className='contactpagetitle'>my clients</h1>
<p className='clientdesc'> i have had the opportunity to work with a diverse group of companies .
some of the notable companies i have worked with includes </p>
<div className='clientimgs'>
    <img src={walmart} alt='walmart' className='clientimg'/>
    <img src={adobe} alt='adobe' className='clientimg'/>
    <img src={facebook} alt='facebook' className='clientimg'/>
    <img src={microsoft} alt='microsoft' className='clientimg'/>
</div>

    </div>
    <div id='contact'>
<h1 className='contactpagetitle'> contact me</h1>
<span className='contactdesc'>please fill out the form below to discuss any work opportunities. </span>
<form className='contactform' ref={form} onSubmit={sendEmail}>
    <input type='text' className='name' placeholder='Your Name'name='your_name'/>
    <input type='email' className='email' placeholder='your email' name='your_email'/>
   <textarea name='message' rows={5} placeholder='your Message'className='msg'></textarea>
   <button type='submit' value='send' className='submitbtn'>submit</button>
   <div className='links'>
    <img src={facebookicon} className='link' alt=''/>
    <img src={twittericon} className='link' alt=''/>
    <img src={youtubeicon} className='link' alt=''/>
    <img src={instgramicon} className='link' alt=''/>
    
    
   </div> 
</form>
    </div>
</section>
  )
}
export default Contacts