import './first.css'
import pic1 from '../../assets/pic1.svg'



function first() {


    return (
        <div className='first'>
            <img src={pic1} alt="" />
            <h1><span>I'm Alex Bennett, </span>frintend developer based in USA </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi repellendus velit, 
                natus aliquam dolorem iure odit veniam nihil voluptatibus </p>
                 <div className='first-action'>
                    <div className='but'> connect with me</div>
                    <div className='but1'>My Resume</div>

                 </div>
        </div>

    )
}

export default first