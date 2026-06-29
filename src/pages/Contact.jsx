function Contact() {

  return (

    <div className="contact-page">

      <h1>Contact Us</h1>

      <p className="contact-subtitle">
        We'd love to hear from you.
      </p>

      <div className="contact-container">

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p>📧 support@shopease.com</p>

          <p>📞 +91 9876543210</p>

          <p>📍 Vijayawada, Andhra Pradesh</p>

        </div>

        <div className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
          />

          <button>
            Send Message
          </button>

        </div>

      </div>

    </div>

  );

}

export default Contact;