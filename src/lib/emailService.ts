import emailjs from '@emailjs/browser';

interface EmailData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

interface EmailResponse {
  status: number;
  text: string;
}

export const sendContactEmail = async (data: EmailData): Promise<EmailResponse> => {
  // Get environment variables
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  // Check if all required environment variables are present
  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EmailJS configuration missing. Please check your environment variables.');
  }

  // Prepare template parameters with fallbacks for optional fields
  const templateParams = {
    name: data.name,
    email: data.email,
    phone: data.phone || 'Not provided',
    company: data.company || 'Not provided',
    service: data.service || 'Not specified',
    budget: data.budget || 'Not specified',
    message: data.message,
    submission_date: new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    }),
  };

  try {
    console.log('Sending email with data:', templateParams);
    
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );
    
    console.log('Email sent successfully:', response);
    return response;
    
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};

// Alternative function for auto-reply to the user (optional)
export const sendAutoReply = async (userEmail: string, userName: string): Promise<EmailResponse> => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const autoReplyTemplateId = process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID; // Optional
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !autoReplyTemplateId || !publicKey) {
    console.log('Auto-reply not configured');
    return { status: 200, text: 'Auto-reply skipped - not configured' };
  }

  const templateParams = {
    to_email: userEmail,
    to_name: userName,
    reply_date: new Date().toLocaleString(),
  };

  try {
    const response = await emailjs.send(
      serviceId,
      autoReplyTemplateId,
      templateParams,
      publicKey
    );
    
    console.log('Auto-reply sent successfully:', response);
    return response;
    
  } catch (error) {
    console.error('Failed to send auto-reply:', error);
    throw error;
  }
};

// Utility function to validate email format
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Utility function to sanitize form data
export const sanitizeFormData = (data: EmailData): EmailData => {
  return {
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    phone: data.phone.trim(),
    company: data.company.trim(),
    service: data.service.trim(),
    budget: data.budget.trim(),
    message: data.message.trim(),
  };
};