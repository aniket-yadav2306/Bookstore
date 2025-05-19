import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    // Add logic to send the form data to your backend or API
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
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
      </div>
    </div>
  );
}

export default Contact;
