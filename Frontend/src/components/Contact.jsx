import React, { useState } from 'react';
import toast from 'react-hot-toast';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSuccess = () => {
    toast.success('Message submitted successfully!');
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">Contact Us</h2>

        {!submitted ? (
          <form
            action="https://formsubmit.co/el/notiru"
            method="POST"
            onSubmit={handleSuccess}
            className="space-y-4"
          >
            {/* FormSubmit controls */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />
            <input type="hidden" name="_next" value="http://localhost:5173/thankyou" />

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-md outline-none bg-white dark:bg-slate-700 dark:text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                className="w-full px-4 py-2 border rounded-md outline-none bg-white dark:bg-slate-700 dark:text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-white">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Type your message"
                rows="4"
                className="w-full px-4 py-2 border rounded-md outline-none bg-white dark:bg-slate-700 dark:text-white resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        ) : (
          <p className="text-green-600 dark:text-green-400 font-medium">
            Thank you! Your message has been sent.
          </p>
        )}
      </div>
    </div>
  );
}

export default Contact;
