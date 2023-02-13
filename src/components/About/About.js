import aboutImage from '../../assets/about.png'
import "./About.css"

const About = () =>{
    return(
        <div id='about' className="about">
            <section className="about row container">
                <div className="row">
                    <img src={aboutImage} alt="aboutImage"/>
                </div>
                <div>
                    <h1>About <span>Us</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    <a href='#project'>Projects</a>
                </div>
            </section>
            
        </div>
    )
}
export default About