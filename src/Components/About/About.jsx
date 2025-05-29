import './About.css'
import logo2 from '../../assets/logo2.svg'
import pic2 from '../../assets/pic2.svg'


function About() {

    return (
        <div id='about1' className='about'>


            <div className='abt1'>
                <h1>About me</h1>
                <img src={logo2} alt="" />
            </div>

            <div className="abt-sec">
                <div className="abt-left">

                    <img src={pic2} alt="" />
                </div>
                <div className="abt-right"></div>

                <div className="abt-p">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id vero et, sunt autem ratione 
                    facere magnam. Nostrum ullam, sunt repellat dolore, voluptas numquam facere sapiente sed animi
                     reprehenderit, nihil iste!</p>
                     <p>Nostrum ullam, sunt repellat dolore, voluptas numquam facere sapiente sed animi
                     reprehenderit, nihil iste!</p>
                     

                     <div className="abt-skills">

                        <div className="abt-skl"><p>HTML & CSS </p><hr style={{width:"50%"}}/></div>
                        <div className="abt-skl"><p>React JS </p> <hr style={{width:"90%"}}/></div>
                        <div className="abt-skl"><p>JAVA Script</p> <hr style={{width:"40%"}}/></div>
                        <div className="abt-skl"><p>Node JS</p> <hr style={{width:"80%"}}/></div>
                     </div>
                     </div>
            </div>
            <div className="abt-ach">
                <div className="abt-ach1">
                    <h1>10+</h1>
                    <p>Year of Experience</p>
                </div>
                <hr />
                <div className="abt-ach1">
                    <h1>90+</h1>
                    <p> PROJECT COMPLETED</p>
                </div>
                <hr />
                <div className="abt-ach1">
                    <h1>10+</h1>
                    <p> HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
        

    )
}

export default About