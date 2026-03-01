import "./Contact.css";
function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <input type="text" placeholder="Name" /><br></br>
        <input type="email" placeholder="Email" /><br></br>
        <textarea placeholder="Message"></textarea><br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Contact;
