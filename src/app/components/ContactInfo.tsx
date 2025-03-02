// ContactInfo is a functional component that displays the company address, phone number, and map
import React, { FC } from "react";
import Image from "next/image";
import styles from "./ContactInfo.module.scss";

const ContactInfo: FC = () => {
  // Renders a subtitle, title, map image, and key contact details
  return (
    <div className={styles.contactInfo}>
      <h3 className={styles.subtitle}>Contact Us</h3>
      <h1 className={styles.title}>Get in Touch with Ocozzio</h1>

      <div className={styles.imageContainer}>
        <Image
          src="/images/company-map.png"
          alt="Map showing company location"
          width={600}
          height={300}
          className={styles.image}
        />
      </div>

      <div className={styles.info}>
        <h3>
          <span className={styles.proudlyServing}>Proudly Serving</span>{" "}
          <span className={styles.yourCommunity}>Your Community</span>
        </h3>
        <p>
          <Image
            src="/images/map-pin-icon.png"
            alt="Location icon"
            width={20}
            height={20}
            className={styles.icon}
          />
          1234 Horizon Lane, Suite 500, Evergreen City, CA 90210
        </p>
        <p>
          <Image
            src="/images/green-phone-icon.png"
            alt="Phone icon"
            width={20}
            height={20}
            className={styles.icon}
          />
          (555) 123-4567
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
