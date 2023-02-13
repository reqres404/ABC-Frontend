import "./Project.css"
import project1 from "../../assets/project1.png"
import project2 from "../../assets/project2.png"
import project3 from "../../assets/project3.png"

const Project=()=>{
    return(
        <div>
            <section id="project">
                <h1 className="heading">Our <span>Achievements</span></h1>
                <div className="project-container">
                    <div className="project-card">
                        <img src={project1} alt="projectImage"/>
                        <div className="text-section">
                        <h1><span>Project1</span></h1>
                        <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</strong></p>
                        </div>
                    </div>
                    <div className="project-card">
                        <img src={project2} alt="projectImage"/>
                        <div className="text-section">
                        <h1><span>Project2</span></h1>
                        <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</strong></p>
                        </div>
                    </div>
                    <div className="project-card" alt="projectImage">
                        <img src={project3}/>
                        <div className="text-section">
                        <h1><span>Project3</span></h1>
                        <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</strong></p>
                        </div>
                    </div>
                </div>
            </section>
        
        </div>
    )   
}
export default Project