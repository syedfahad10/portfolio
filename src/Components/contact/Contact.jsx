import './Contact.css'
import logo2 from '../../assets/logo2.svg'



const Contact = () => {
  

    return (
   <div id='contact' className='Contact'>
    <div className="contact-title">
        <h1> Get in touch</h1>
        <img src={logo2} alt="" />
    </div>

    <div className="contact-sec">
        <div className="contact-left">
            <h1> Let's Talk</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id repellat atque perspiciatis,
                 quasi rerum minus deserunt culpa exercitationem accusantium </p>
                 <div className="contact-detail">
                    <p>Email@.com</p>
                 </div>

                 <div className="contact-detail">
                    <p>089-987-98 68</p>
                 </div>

                 <div className="contact-detail">
                    <p>CA, united Statrd</p>
                 </div>
        </div>
    

     <form className="contact-right">
        <label htmlFor=''>Your Name</label>
        <input type="Your Nmae" placeholder='Enter your name' name='name'/>
        <label htmlFor=''>Your Email</label>
        <input type='emali' placeholder='Enter your email' namee='email'/>
        <label htmlFor=''> write your message here</label>
        <textarea name='message' rows="8" placeholder='Enter your message'> Enter your message</textarea>
        <button type='submit' className="contact-submet">Submet Now</button>

     </form>
   </div>
   </div>
  
    
    )
  }
  
  export default Contact