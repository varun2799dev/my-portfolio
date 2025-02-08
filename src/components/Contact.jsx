import{ useRef } from 'react'
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zq7lrfi', 'template_9z5s3mt', form.current, {
        publicKey: 'jvpjelG_fmZlXBTUL',
      }).then(() => {
          console.log('SUCCESS!');
          e.target.reset()
          alert('Your message has been sent via email')
        },(error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    
<div className="flex justify-center items-center min-h-screen">
  <form className="max-w-lg w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg" ref={form} onSubmit={sendEmail} >
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
          className="w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-auto"
          placeholder="John"
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
          className="w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-auto"
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
    </div>
  </form>
</div>

  )
}

export default Contact
