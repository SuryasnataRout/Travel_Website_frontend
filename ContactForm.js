import "./ContactFormStyles.css"
function ContactForm(){
    return(
        <div className="from">
          <h1>Send  Message to Us!</h1>
          <form>
                <input placeholder="Name"/>
                <input placeholder="Email"/>
                <input placeholder="Subject"/>
                <textarea placeholder="Message" rows="4"></textarea>
                <button>Send Message</button>
          </form>   
        </div>
    )
}

export default ContactForm;