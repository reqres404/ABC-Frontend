import heroImage from '../../assets/hero.png'
import "./Hero.css"


const Hero = () =>{
    return(
        <div className="hero">
            <section className="hero row container">
                <div>
                    <h1>Lets <span>Build</span> the <span>future</span> together</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    <a href="#project">Our Project</a>
                </div>
                <div className="row">
                    <img src={heroImage} alt="heroImage"/>
                </div>
            </section>
            
        </div>
    )
}
export default Hero