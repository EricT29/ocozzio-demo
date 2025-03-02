// Home component serves as the main page layout for displaying contact details and a form
import React, { FC } from "react";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import styles from "./page.module.scss";

// The Home functional component is typed as FC for a concise, type-safe declaration
const Home: FC = () => {
  return (
    // Main container for the home page
    <main className={styles.homePage}>
      {/* Wrapper for contact information and form */}
      <div className={styles.contactContainer}>
        <ContactInfo />
        <ContactForm />
      </div>
    </main>
  );
};

export default Home;
