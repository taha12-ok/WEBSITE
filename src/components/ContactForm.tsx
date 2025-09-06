'use client';

import React, { useState } from 'react';
import * as emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  // Fixed: Use constants to avoid process reference in browser
  const getEmailJSConfig = () => {
    return {
      serviceId: 'service_xqm30ym',
      templateId: 'template_69m181a', 
      publicKey: 'krRWqhoEdvQJVRfw6'
    };
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setShowError(false);
    setShowSuccess(false);

    const config = getEmailJSConfig();
    
    console.log('📧 Sending contact form email...');

    try {
      // Initialize EmailJS
      emailjs.init(config.publicKey);

      // Prepare template parameters to match your EmailJS template
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        company: formData.company || 'Not provided',
        service: formData.service || 'Not specified',
        budget: formData.budget || 'Not specified',
        message: formData.message,
        submission_date: new Date().toLocaleString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      console.log('📋 Form data being sent:', templateParams);

      // Send email using EmailJS
      const response = await emailjs.send(
        config.serviceId,
        config.templateId,
        templateParams
      );

      console.log('✅ Email sent successfully:', response);

      if (response.status === 200) {
        setShowSuccess(true);
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send email');
      }

    } catch (error) {
      console.error('❌ Failed to send email:', error);
      setShowError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const closeSuccess = () => setShowSuccess(false);
  const closeError = () => setShowError(false);

  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get In <span className="text-blue-500">Touch</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Ready to start your project? Let's discuss your vision.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-xl shadow-2xl">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                placeholder="Your full name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-gray-300 mb-2 font-medium">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                placeholder="Your phone number"
              />
            </div>

            {/* Company Field */}
            <div>
              <label htmlFor="company" className="block text-gray-300 mb-2 font-medium">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                placeholder="Your company name"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
              Message <span className="text-red-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all resize-vertical"
              placeholder="Tell us about your project requirements, goals, timeline, and any specific features you need..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                Sending Message...
              </>
            ) : (
              <>
                Send Message
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </>
            )}
          </button>

          {/* Privacy Notice */}
          <div className="flex items-start mt-6 text-sm text-gray-400">
            <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <p>
              Your information is secure and will only be used to respond to your inquiry. 
              We typically respond within 24 hours during business days.
            </p>
          </div>
        </form>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-gray-800 p-8 rounded-xl max-w-md w-full relative border border-gray-700">
            <button
              onClick={closeSuccess}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Message Sent Successfully!</h3>
              <p className="text-gray-300 mb-6">
                Thank you for reaching out! We've received your message and will get back to you within 24 hours.
              </p>
              <div className="bg-gray-700 p-4 rounded-lg text-left">
                <p className="text-sm text-gray-300">
                  <strong className="text-white">Next Steps:</strong><br />
                  • Check your email for a confirmation<br />
                  • We'll review your requirements<br />
                  • Expect our response soon!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showError && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-gray-800 p-8 rounded-xl max-w-md w-full relative border border-gray-700">
            <button
              onClick={closeError}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-center">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Failed to Send Message</h3>
              <p className="text-gray-300 mb-6">
                We're sorry, but there was an error sending your message. Please try again or contact us directly.
              </p>
              <div className="bg-gray-700 p-4 rounded-lg text-left">
                <p className="text-sm text-gray-300">
                  <strong className="text-white">Alternative Contact:</strong><br />
                  Email: info@aurabexsolution.com<br />
                  We apologize for the inconvenience.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}