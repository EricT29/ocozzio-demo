// Footer is a React Functional Component that displays privacy policy, contact details, and navigation links
import React, { FC } from "react";
import Image from "next/image";
import styles from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/*Contains privacy policy and primary contact information*/}
        <div className={styles.bottom}>
          <a href="#" className={styles.link}>Privacy Policy</a>
          <div className={styles.contactInfo}>
            <Image
              src="/images/white-phone-icon.png"
              alt="Phone icon"
              width={16}
              height={16}
            />
            <span>(555) 123-4567</span>
          </div>
          <div className={styles.contactInfo}>
            <Image
              src="/images/internet-icon.png"
              alt="Internet icon"
              width={16}
              height={16}
            />
            <a href="#" className={styles.link}>info@demoproject.com</a>
          </div>
        </div>

        {/* Provides quick links for site navigation*/}
        <div className={styles.top}>
          <a href="#">Our Plans</a>
          <a href="#">Our Team</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
