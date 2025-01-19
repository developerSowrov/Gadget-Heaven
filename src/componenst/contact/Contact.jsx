import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Gadget | Contact</title>
      </Helmet>
      <div className="p-8 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-purple-700">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-8">
          We would love to hear from you! Reach out to us anytime.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form className="flex flex-col gap-6 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2 text-purple-600">
              Send a Message
            </h2>
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              placeholder="Your Message"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows="6"
            ></textarea>
            <button
              type="submit"
              className="bg-purple-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition duration-300"
            >
              Send Message
            </button>
          </form>

          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-purple-600">
              Our Contact Information
            </h2>
            <p className="text-gray-700">
              <strong>Address:</strong> 123 Gadget Street, Tech City, TX 56789
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong> +1 (234) 567-8900
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> support@gadgetheaven.com
            </p>
            <h3 className="text-xl font-bold text-purple-600">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300"
              >
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300"
              >
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300"
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">
                Q: How can I track my order?
              </h3>
              <p className="text-gray-600">
                A: Once your order is shipped, you will receive an email with
                the tracking details.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">
                Q: What is your return policy?
              </h3>
              <p className="text-gray-600">
                A: We accept returns within 30 days of purchase. Please ensure
                the product is in original condition.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">
                Q: Can I cancel my order?
              </h3>
              <p className="text-gray-600">
                A: Yes, orders can be canceled within 24 hours of placement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
