import './contact.scss';

export default function contact() {
    return (
        <div className="contact" id="contact"> 
            <h1>Contact</h1>
             <div className="containerTab">
                <div className="contact-left">
                    <input type="text" className="textbox" placeholder="* Name is Required" required />
                    <input type="email" className="textbox" placeholder="* Email is Required" required /> 
                </div>
                <div className="contact-right">
                    <form><textarea className="message" placeholder="Write your message from here..." required /></form>
                    <button> Send </button>
                </div>
            </div>
        </div>
    )
}
