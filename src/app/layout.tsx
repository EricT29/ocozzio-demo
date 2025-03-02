// RootLayout provides a common header and footer across all pages of the application
import React, { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.scss";

// Metadata for SEO and descriptive purposes
export const metadata = {
  title: "Get in Touch with Ocozzio | Contact Us",
  description: "Have questions about Ocozzio’s products, services, or team? Contact us today! Visit our office at 1234 Horizon Lane, Suite 500, Evergreen City, CA, or reach out via phone at (555) 123-4567. Fill out our online form to connect with us directly. We’re proudly serving your community!",
};

// Defines the expected structure of RootLayout’s props
interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
