import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_zq7lrfi", "template_9z5s3mt", form.current, {
      publicKey: "jvpjelG_fmZlXBTUL",
    }).then(() => {
        setMessageStatus("success");
        e.target.reset();
      }, (error) => {
        setMessageStatus("error");
        console.error("FAILED...", error.text);
      }
    );
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-6">
      {/* Heading Message */}
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
        Let's Connect! Feel free to reach out.
      </h1>
      {/* Form Container */}
      <form 
        className="max-w-lg w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg" 
        ref={form} 
        onSubmit={sendEmail}
      >
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Get in Touch
        </h2>

        <div className="flex flex-col gap-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john@example.com"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your message here..."
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mt-4">
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>

          {/* Success/Error Message */}
          {messageStatus === "success" && (
            <p className="text-green-500 text-sm mt-2 text-center">Your message has been sent successfully!</p>
          )}
          {messageStatus === "error" && (
            <p className="text-red-500 text-sm mt-2 text-center">Something went wrong. Please try again.</p>
          )}
        </div>
      </form>

      {/* Contact Info & Social Links */}
      <div className="flex flex-col items-center mt-6">
        <p className="text-gray-600 dark:text-gray-400 text-center">
          Follow or reach out to me:
        </p>
        
        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-3">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/varun-tadpatri" target="_blank" rel="noopener noreferrer">
            <img className="w-8 h-8 hover:scale-110 transition-transform duration-300" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
          </a>

          {/* GitHub */}
          <a href="https://github.com/varun2799dev" target="_blank" rel="noopener noreferrer">
            <img className="w-8 h-8 hover:scale-110 transition-transform duration-300" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
          </a>

          {/* Email */}
          <a href="mailto:varuntadpatri@gmail.com">
            <img className="w-8 h-8 hover:scale-110 transition-transform duration-300" src="https://cdn-icons-png.flaticon.com/512/281/281769.png" alt="Email" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
