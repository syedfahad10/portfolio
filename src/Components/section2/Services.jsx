import './Services.css'
import logo2 from '../../assets/logo2.svg'
import icon1 from '../../assets/icon1.svg'
import Text_data from '../../assets/Text_data'


const Services = () => {
  

    return (
   <div id='services' className='services'>
    <div className="ser-title">
        <h1> My Services</h1>
        <img src={logo2} alt="" />
    </div>


    <div className="services-container">
        {Text_data.map((service, index)=>{
            return <div key={index} className="Services-format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.S_desc}</p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src={icon1} alt="" />
                    </div>
            </div>
        })}

    </div>
  
  
  
    
  

   </div>
  
  
    
    )
  }
  
  export default Services