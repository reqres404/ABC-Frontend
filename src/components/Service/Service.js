import "./Service.css"
import service1 from "../../assets/service1.png"
import service2 from "../../assets/service2.png"
import service3 from "../../assets/service3.png"

const Service=()=>{
    return(
        <div>
            <section id="services">
                <h1 className="heading">What We <span>Offer</span></h1>
                <div className="service-container">
                    <div className="service-card">
                        <img src={service1} alt="serviceImage"/>
                        <div className="text-section">
                        <h1><span>Service1</span></h1>
                        <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</strong></p>
                        </div>
                    </div>
                    <div className="service-card">
                        <img src={service2} alt="serviceImage"/>
                        <div className="text-section">
                        <h1><span>Service2</span></h1>
                        <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</strong></p>
                        </div>
                    </div>
                    <div className="service-card">
                        <img src={service3} alt="serviceImage"/>
                        <div className="text-section">
                        <h1><span>Service3</span></h1>
                        <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</strong></p>
                        </div>
                    </div>
                </div>
            </section>
        
        </div>
    )   
}
export default Service