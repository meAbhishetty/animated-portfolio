import React from "react";
import "./Contact.scss";

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-text">
                <h1>Lets Work Together</h1>
                <div className="item">
                    <h2>Mail</h2>
                    <span>react@hello.com</span>
                </div>
                <div className="item">
                    <h2>Address</h2>
                    <span>Sirsi, Karnataka</span>
                </div>
                <div className="item">
                    <h2>Phone</h2>
                    <span>+91 9876543210</span>
                </div>
            </div>
            <div className="contact-form">
                <form>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                    />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Message" rows="8" />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
