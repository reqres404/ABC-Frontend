import Hero from "../components/Hero/Hero"
import Service from "../components/Service/Service"
import Project from "../components/Projects/Project"
import About from "../components/About/About"

const Home = () =>{
    return(
        <div>
            <Hero/> 
            <Service/>
            <About/>
            <Project/>
            
        </div>
    )
}
export default Home