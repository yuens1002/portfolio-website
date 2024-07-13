'use server';

import React from 'react';
import { Resend } from 'resend';
import { validateString, getErrorMessage } from '@/lib/utils';
import ContactFormEmail from '@/email/contact-form-email';
import toast from 'react-hot-toast';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');
  let data;

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid sender email',
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    };
  }

  try {
    data = await resend.emails.send({
      from: 'Email Form from Portfolio <onboarding@resend.dev>',
      to: 'yuens1002@gmail.com',
      subject: 'Message from contact form',
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
    // resend doesn't throw (4xx) errors , it returns an object with an error property
    if (data.error?.message)
      console.error(`email errors: ${getErrorMessage(data.error)}`);
  } catch (error) {
    console.error(`email server error: ${getErrorMessage(error)}`);
  } finally {
    return {
      data: data?.data,
      error: data?.error?.message,
    };
  }
};
