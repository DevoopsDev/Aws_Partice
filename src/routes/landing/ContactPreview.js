import ContactForm from "../contact/ContactForm";
import { React } from 'react';

const ContactPreview = () => {
  return (
    <article className="landing__contact">
      <h2 className="title-font pink-text h2-tag">Contact Me</h2>
      <p className="white-text p-tag">
        If you are interested in hiring me I am always open to new opportunities
        and interesting projects! Feel free to contact me if you have any other
        requests or questions regarding web development.
      </p>
      <ContactForm />
    </article>
  );
};

export default ContactPreview;
