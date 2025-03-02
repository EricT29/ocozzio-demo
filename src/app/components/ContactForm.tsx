// ContactForm is a React Functional Component for capturing user information
import React, { FC } from "react";
import Image from "next/image";
import styles from "./ContactForm.module.scss";

const ContactForm: FC = () => {
  // Returns a container with an icon, headings, and an input form
  return (
    <div className={styles.contactForm}>
      {/* Icon container for a visual element at the top */}
      <div className={styles.iconContainer}>
        <Image
          src="/images/large-red-map-pin.png"
          alt="Large red map pin"
          width={60}
          height={60}
          className={styles.iconImage}
        />
      </div>

      {/* Encourages the user to reach out with inquiries */}
      <h3 className={styles.heading}>
        Have questions about our products, services, or our team?
      </h3>
      <h2 className={styles.title}>Reach out!</h2>

      {/* Simple form collecting user details */}
      <form className={styles.form}>
        <input type="text" placeholder="First Name*" required />
        <input type="text" placeholder="Last Name*" required />
        <input type="email" placeholder="Email Address*" required />
        <input type="text" placeholder="Company Name*" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
