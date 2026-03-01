import Footer from "../Footer/Footer";
import "./Contact.css";
function Contact(){
    return(
        <>
        <div className="contact">
            <h1>Contact Us</h1>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
             <button>Send</button>

        </div>
        <Footer />
        </>
    )
}
export default Contact;