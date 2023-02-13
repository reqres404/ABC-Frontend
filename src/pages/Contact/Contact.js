import ContactForm from "../../components/ContactForm/ContactForm"
import Footer from "../../components/Footer/Footer"
import './Contact.css'

const Contact = () =>{
    return(
        <div className="contact">
            <section className="contact row container">
                <div>
                    <h1>Lets <span>Talk</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                </div>
                <div className="row">
                    <ContactForm/>
                </div>
            </section>

        </div>
    )
}
export default Contact