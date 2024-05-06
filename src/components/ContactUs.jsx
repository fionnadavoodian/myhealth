import React from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import '../styles/ContactUs.css';

const ContactUs = () => {
    return (
        <div className="contact-us-container">
            <form className="contact-form">
                <h2 className="contact-form-heading">Send Us a Message</h2>
                <p className="contact-us-text">
                    Have any questions or inquiries? Feel free to reach out to us!
                    You can contact us via email, phone, or by filling out the form below.
                </p>
                <input type="text" placeholder="Your Name" className="contact-input" />
                <input type="email" placeholder="Your Email" className="contact-input" />
                <textarea placeholder="Your Message" rows="4" className="contact-input contact-textarea" />
                <button type="submit" className="contact-btn">Send Message</button>
            </form>
            <footer className="contact-footer">
                <div className="contact-info">
                    <div className="contact-item">
                        <a href='#'>
                            <FaPhone className="contact-icon" />
                            <p>+1234567890</p>
                        </a>
                    </div>
                    <div className="contact-item">
                        <a href='#'>
                            <FaEnvelope className="contact-icon" />
                            <p>info@myhealth.com</p>
                        </a>
                    </div>
                </div>
                <div className="social-media-icons">
                    <a href="https://t.me/your_telegram_username_or_channel"><FaTelegram className="contact-icon" /></a>
                    <a href="https://wa.me/your_whatsapp_number"><FaWhatsapp className="contact-icon" /></a>
                    <a href='#'><FaFacebook className="contact-icon" /></a>
                    <a href='#'><FaTwitter className="contact-icon" /></a>
                    <a href='#'><FaInstagram className="contact-icon" /></a>
                </div>
            </footer>
        </div>
    );
};

export default ContactUs;
