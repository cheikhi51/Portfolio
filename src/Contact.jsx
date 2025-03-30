import React from "react";

function Contact() {
  return (
    <div className="contact-container p-8 text-white min-h-screen " id="contact">
      <h1 className="text-5xl flex justify-center my-20 contact-section-title fade-in-element">Contact Me</h1>
      <div className="flex justify-center">
        {/* Combined Card */}
        <div className="flex flex-col md:flex-row rounded-2xl shadow-xl p-6 w-full max-w-5xl fade-in-element">
          {/* Contact Details Section */}
          <div className="side bg-gradient-to-r from-blueviolet to-teal p-6 rounded-xl flex flex-col justify-center items-start w-full md:w-1/2 text-white">
            <h2 className="text-3xl mb-4 getintouch-text mt-3">Get in Touch</h2>
            <p className="text-lg mb-4">
              <strong>📞</strong> +212 688 86 13 88
            </p>
            <p className="text-lg mb-4">
              <strong>📧</strong> cheikhimohamed51@gmail.com
            </p>
            <p className="text-lg mb-4">
              <strong>📍</strong> Avenue Mohamed Ben Abdellah, Av. Regragui, Rabat
            </p>
            <p className="text-lg">
              Feel free to reach out for collaborations or just a friendly chat!
            </p>
          </div>

          {/* Contact Form Section */}
          <form
            action="/contact.php"
            method="post"
            className="form  flex flex-col gap-6 p-6 w-full md:w-1/2 text-gray-100 mt-6"
          >
            <div className="contact-input  relative flex items-center">
              <label className="contact-label text-white absolute left-0 flex item">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
                className="w-full p-3 border-b border-gray-300   text-white focus:outline-none"
              />
            </div>
            <div className="contact-input relative flex items-center">
              <label className="contact-label text-white absolute left-0">eg@Email.com</label>
              <input
                type="email"
                name="email"
                placeholder="eg@Email.com"
                required
                className="w-full p-3 border-b border-gray-300   text-white focus:outline-none "
              />
            </div>
            <div className="contact-input relative flex items-center">
              <label className="contact-label text-white absolute left-0">Message</label>
              <textarea
                name="message"
                placeholder="Message"
                required
                className="w-full p-3 border-b border-gray-300   text-white focus:outline-none "
              ></textarea>
            </div>
            <input
              type="submit"
              value="Send"
              className="contact-button p-3 text-white rounded-lg shadow-lg transition cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
