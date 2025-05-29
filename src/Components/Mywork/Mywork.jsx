import './Mywork.css'
import logo2 from '../../assets/logo2.svg'
import text2_data from '../../assets/Text2_data'
import icon1 from '../../assets/icon1.svg'




const Mywork = () => {
  

    return (

  <div id='work' className='mywork'>
      <div className="mywork-title">
          <h1> My Latest work</h1>
          <img src={logo2} alt="" />
      </div>

      <div className="mywork-container">
        {text2_data.map((text2, index)=>{
          return <img key={index} src={text2.w_img}  alt=""/>
        })}
      </div>
      <div className="mywork-showmore">
        <p>Shohe More</p>
        <img src={icon1} alt="" />
      </div>



  

   </div>
  
  
    
    )
  }
  
  export default Mywork